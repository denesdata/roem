import './libs/d3/d3'; 
import TimeSeries from 'app/core/time_series2';
import kbn from 'app/core/utils/kbn';
import {MetricsPanelCtrl} from 'app/plugins/sdk';
import {heatmapEditor, displayEditor, pluginName} from './properties';
import _ from 'lodash';
import moment from 'moment';
import './series_overrides_heatmap_ctrl';
import './css/heatmap.css!';

const panelOptions = {
	aggregationFunctions: ['avg', 'min', 'max', 'total', 'current', 'count'],
	treeMap:{
    	modes: ['squarify', 'slice', 'dice', 'slice-dice'],
    	aggregationFunctions: ['sum', 'min', 'max', 'extent', 'mean', 'median', 'quantile', 'variance', 'deviation'],
    	timestampFormats: ['YYYY-MM-DDTHH', 'YYYY-MM-DDTHH:mm', 'YYYY-MM-DDTHH:mm:ss', 'YYYY-MM-DDTHH:mm:ss.sssZ']
	}
};

const panelDefaults = {
	// other style overrides
    seriesOverrides: [],
	thresholds: '0,10',
	colors: ['rgba(50, 172, 45, 1)', 'rgba(241, 255, 0, 1)', 'rgba(245, 54, 54, 1)'],
	legend: {
		show: true,
		min: true,
		max: true,
		avg: true,
		current: true,
		total: true
	},
	maxDataPoints: 100,
	mappingType: 1,
	nullPointMode: 'connected',
	format: 'none',
    valueMaps: [
      { value: 'null', op: '=', text: 'N/A' }
    ],
    treeMap: {
    	mode: 'squarify',
    	groups: [{key:'server', value: '/^.*\./g'}],
    	colorByFunction: 'max',
    	sizeByFunction: 'constant',
    	enableTimeBlocks: false,
    	enableGrouping: true,
    	debug: false,
    	depth: 0,
    	ids: ['alias'],
    	nodeSizeProperty: "value"
    }
};

class HeatmapCtrl extends MetricsPanelCtrl {
	constructor($scope, $injector, $sce) {
		super($scope, $injector);
		_.defaults(this.panel, panelDefaults);
		
		this.options = panelOptions;
		this.panel.chartId = 'chart_' + this.panel.id;
		this.containerDivId = 'container_'+this.panel.chartId;
		this.$sce = $sce;
		this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
		this.events.on('data-received', this.onDataReceived.bind(this));
		this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
		this.initializePanel();
	}
	
	initializePanel(){
		var d3plusPath = 'plugins/'+pluginName+'/libs/d3plus/d3plus.full.js';
		var _this = this;
		var meta = {};
		meta[d3plusPath] = {
			      format: 'global'
	    };
		
		SystemJS.config({
			  meta: meta
			});

		SystemJS.import(d3plusPath).then(function d3plusLoaded(){
			console.log('d3plus is loaded');
			_this.events.emit('data-received');
		});
	}
	
	handleError(err){
		this.getPanelContainer().html('<p>Error:</p><pre>' + err + '</pre>');
	}
	
	onInitEditMode() {
		this.addEditorTab('Heatmap', heatmapEditor, 2);
		this.addEditorTab('Display', displayEditor, 3);
	}
	
	getPanelContainer(){
		return $(document.getElementById(this.containerDivId));
	}
	
	onDataReceived(dataList){
		console.info('received data');
		console.debug(dataList);
		if(undefined != dataList) {
			this.series = dataList.map(this.seriesHandler.bind(this));
			console.info('mapped dataList to series');
		}

		var preparedData = this.d3plusDataProcessor(this.series);
		this.render(preparedData);
	}
	
	getGroupKeys(){
		return this.panel.treeMap.groups.map(function(group){
			return group.key;
		});
	}
	
	/**
	 * Prepare data for d3plus
	 */
	d3plusDataProcessor(dataArray){
		var resultArray = [];
		var hasGroups = (this.panel.treeMap.groups.length > 0)
		
		if(!hasGroups){
			// just add the original items since there are no groups
			for (var dataIndex=0; dataIndex < dataArray.length; dataIndex++){
				var newDataItem = Object.assign({}, dataArray[dataIndex], dataArray[dataIndex].stats);
				resultArray.push(newDataItem);
			}
		} else {
			// Process Groups
			var groupArray = [];
			for(var groupIndex=0; groupIndex<this.panel.treeMap.groups.length; groupIndex++){
				groupArray.push({
					key: this.panel.treeMap.groups[groupIndex].key,
					regex: kbn.stringToJsRegex(this.panel.treeMap.groups[groupIndex].value)
				})
			}
			for (var dataIndex=0; dataIndex < dataArray.length; dataIndex++){
				var newDataItem = Object.assign({}, dataArray[dataIndex]);
				// only add the stats if we arent using granular timeblock data
				if(!this.panel.treeMap.enableTimeBlocks){
					Object.assign(newDataItem, dataArray[dataIndex].stats);
				}
				delete newDataItem.stats;
				
				for(var groupIndex=0; groupIndex < groupArray.length; groupIndex++){
					var key = groupArray[groupIndex].key;
					var regex = groupArray[groupIndex].regex;
					var matches = newDataItem.alias.match(regex);
					if (matches && matches.length > 0){
						newDataItem[key] = matches[0];
					} else {
						newDataItem[key] = 'NA';
					}
				}
				resultArray.push(newDataItem);
			}
		}

		
		// If we're using timeBlocks mode
		// replace the aggregated series with individual records
		if(this.panel.treeMap.enableTimeBlocks){
			console.info('creating timeblock records')
			var timeBlockArray = [];
			for (var dataIndex=0; dataIndex < resultArray.length; dataIndex++){
				console.debug('dataIndex:'+dataIndex+', alias:'+resultArray[dataIndex].alias);
				var dataSeries = resultArray[dataIndex];
				for(var dataPointIndex=0; dataPointIndex < dataSeries.flotpairs.length; dataPointIndex++){
					var dataSeriesCopy = Object.assign({}, dataSeries);
					delete dataSeriesCopy.datapoints;
					delete dataSeriesCopy.flotpairs;
					dataSeriesCopy.count = 1;
					dataSeriesCopy.timestamp = dataSeries.flotpairs[dataPointIndex][0];
					dataSeriesCopy.value = dataSeries.flotpairs[dataPointIndex][1];
					timeBlockArray.push(dataSeriesCopy);
				}
			}
			resultArray = timeBlockArray;
		} 
		
		return resultArray;
	}
	
	/**
	 * Series Handler
	 */
	seriesHandler(seriesData) {
		var series = new TimeSeries({
			datapoints: seriesData.datapoints,
			alias: seriesData.target.replace(/"|,|;|=|:|{|}/g, '_')
		});
	    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
	    return series;
	} // End seriesHandler()
	
	addSeriesOverride(override) {
		this.panel.seriesOverrides.push(override || {});
	}
	
	addTreeMapGroup(group) {
		this.panel.treeMap.groups.push(group || {});
	}

	removeSeriesOverride(override) {
		this.panel.seriesOverrides = _.without(this.panel.seriesOverrides, override);
	    this.render();
	}
	
	removeTreeMapGroup(group) {
		this.panel.treeMap.groups = _.without(this.panel.treeMap.groups, group);
	    this.render();
	}
	
	updateThresholds(){
		var thresholdCount = this.panel.thresholds.length;
		var colorCount = this.panel.colors.length;
		this.refresh();
	}
	
	changeColor(colorIndex, color){
		this.panel.colors[colorIndex] = color;
	}
	
	removeColor(colorIndex){
		this.panel.colors.splice(colorIndex,1);
	}
	
	addColor(){
		this.panel.colors.push('rgba(255, 255, 255, 1)');
	}
	
	getGradientForValue(data, value){
		var min = Math.min.apply(Math, data.thresholds);
		var max = Math.max.apply(Math, data.thresholds);
		var absoluteDistance = max - min;
		var valueDistanceFromMin = value - min;
		var xPercent = valueDistanceFromMin/absoluteDistance;
		// Get the smaller number to clamp at 0.99 max
		xPercent = Math.min(0.99, xPercent);
		// Get the larger number to clamp at 0.01 min
		xPercent = Math.max(0.01, xPercent);
		
		return getColorByXPercentage(this.canvas, xPercent);
	}
	
	applyOverrides(seriesItemAlias){
		var seriesItem = {}, colorData = {}, overrides = {};
		console.info('applying overrides for seriesItem');
		console.debug(seriesItemAlias);
		console.debug(this.panel.seriesOverrides);
		for(var i=0; i<=this.panel.seriesOverrides.length; i++){
			console.debug('comparing:');
			console.debug(this.panel.seriesOverrides[i]);
			if (this.panel.seriesOverrides[i] && this.panel.seriesOverrides[i].alias == seriesItemAlias){
				overrides = this.panel.seriesOverrides[i];
			}
		}
		colorData.thresholds = (overrides.thresholds || this.panel.thresholds).split(',').map(function(strVale) {
			return Number(strVale.trim());
		});
		colorData.colorMap = this.panel.colors;
		seriesItem.colorData = colorData;
		
		seriesItem.valueName = overrides.valueName || this.panel.valueName;
		
		return seriesItem;
	}
	
	invertColorOrder() {
	    this.panel.colors.reverse();
	    this.refresh();
	}
	
	addTreeMapId(){
		this.panel.treeMap.ids.push('');
		this.refresh();
	}
	
	removeTreeMapId(pos){
		this.panel.treeMap.ids.splice(pos,1);
		this.refresh();
	}
	
	changeTreeMapId(idString, pos){
		this.panel.treeMap.ids[pos] = idString;
	}
	
	// #############################################
	// link 
	// #############################################

	link(scope, elem, attrs, ctrl) {
		var chartElement = elem.find('.heatmap');
		chartElement.append('<div id="'+ctrl.containerDivId+'"></div>');
	    var chartContainer = $(document.getElementById(ctrl.containerDivId));
    	console.debug('found chartContainer');
    	console.debug(chartContainer);
    	elem.css('height', ctrl.height + 'px');
    	
    	var canvas = elem.find('.canvas')[0];
	    ctrl.canvas = canvas;
	    var gradientValueMax = elem.find('.gradient-value-max')[0];
	    var gradientValueMin = elem.find('.gradient-value-min')[0];
	    

    	var visFormat =
		{ 
			"text" : function(text, opts) {
				if(opts.key == 'timestamp'){
					var timestamp = moment(Number(text));
					return timestamp.format(ctrl.panel.treeMap.timestampFormat);
				} 
				else if(ctrl.getGroupKeys().indexOf(opts.key)>-1) {
					return text;
				}
				else{
					return d3plus.string.title(text, opts);
				}
			}
		};
    	

    	function render(data){
    		updateSize();
    		updateCanvasStyle();
    		updateChart(data);
    	}
    	
    	function updateCanvasStyle(){
	    	canvas.width = Math.max(chartElement[0].clientWidth, 100);
			var canvasContext = canvas.getContext("2d");
			canvasContext.clearRect(0, 0, canvas.width, canvas.height);
			
			var grd = canvasContext.createLinearGradient(0, 0, canvas.width, 0);
			var colorWidth = 1 / Math.max(ctrl.panel.colors.length, 1);
			for(var i=0; i<ctrl.panel.colors.length; i++){
				var currentColor = ctrl.panel.colors[i];
				grd.addColorStop(Math.min(colorWidth*i,1), currentColor);
			}
			canvasContext.fillStyle = grd;
			canvasContext.fillRect(0, 0, canvas.width, 3);
    		ctrl.canvasContext = canvasContext;
    		
			gradientValueMax.innerText = Math.max.apply(Math, ctrl.panel.thresholds.split(','));
			gradientValueMin.innerText = Math.min.apply(Math, ctrl.panel.thresholds.split(','));
    	}
    	
    	function updateSize(){
    		elem.css('height', ctrl.height + 'px');
    	}
    	
    	function getVisSize(dataPoint){
    		if(ctrl.panel.treeMap.sizeByFunction == 'constant') return 1;
    		else {
        		return dataPoint[ctrl.panel.treeMap.sizeByFunction] || dataPoint.value;
    		}
    	}
    	
    	function getVisColor(dataPoint){
    		var value = dataPoint[ctrl.panel.treeMap.colorByFunction] || dataPoint.value;
    		var rgbColor = ctrl.getGradientForValue({thresholds: ctrl.panel.thresholds.split(',')}, value);
			var hexColor = colorToHex(rgbColor);
			return hexColor;
    	}
    	
    	
    	function updateChart(data){
    		d3.select("#"+ctrl.containerDivId).selectAll('*').remove();
    		
    		// Make sure the necessary IDs are added
    		var idKeys = Array.from(ctrl.panel.treeMap.ids);
    		if(idKeys.length == 0){
    			ensureArrayContains(idKeys, 'alias');
    		}
    		if(ctrl.panel.treeMap.enableTimeBlocks){
    			ensureArrayContains(idKeys, 'timestamp');
    		}
    		
    		// Setup Aggregations 
    		var aggs = {};
    		aggs.value = ctrl.panel.treeMap.aggregationFunction;
    		aggs.current = ctrl.panel.treeMap.aggregationFunction;
    		aggs.count = 'sum';
    		aggs.total = 'sum';
    		aggs.avg = 'mean';
    		aggs.min = 'min';
    		aggs.max = 'max';
    		
    		d3plus.viz()
				.dev(ctrl.panel.treeMap.debug)
    			.aggs(aggs)
    			.container("#"+ctrl.containerDivId)
    			.legend(ctrl.panel.treeMap.showLegend)
    			.data(data)
    			//.type("tree_map")
    			.type({"mode": ctrl.panel.treeMap.mode})    // sets the mode of visualization display based on type    
    			.id({
    				"value": _.uniq(idKeys),
    				"grouping": ctrl.panel.treeMap.enableGrouping
    			})
    			.depth(Number(ctrl.panel.treeMap.depth))
    			.size(getVisSize)
    			.height(ctrl.height)
    			.width(ctrl.width)
    			.color(getVisColor)
    			.format(visFormat)
    			.draw();
    	}
    	
    	
    	this.events.on('render', function onRender(data) {
    		if(typeof d3plus !== 'undefined' && data){
    			render(data);
    			ctrl.renderingCompleted();
    		} else {
    			console.info('d3plus is not loaded yet');
    		}
	    });
	    
	}
// End Class
}

function ensureArrayContains(array, value) {
	if (array.indexOf(value) == -1) {
		array.push(value);
	}
}

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = color.replace(/[rgba\(\)\ ]/g,'').split(',');
    while(digits.length < 3){
    	digits.push(255);
    }
    
    var red = parseInt(digits[0]);
    var green = parseInt(digits[1]);
    var blue = parseInt(digits[2]);
    
    var rgba = blue | (green << 8) | (red << 16);
    return '#' + rgba.toString(16);
};

function getColorByXPercentage(canvas, xPercent){
	var x = canvas.width * xPercent || 0;
	var context = canvas.getContext("2d");
    var p = context.getImageData(x, 1, 1, 1).data; 
    var color = 'rgba('+[p[0] +','+ p[1] +','+ p[2] +','+ p[3]]+')';
    return color;
}

HeatmapCtrl.templateUrl = 'module.html';

export {
	HeatmapCtrl,
	HeatmapCtrl as MetricsPanelCtrl
};
