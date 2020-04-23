'use strict';

System.register(['./libs/d3/d3', 'app/core/time_series2', 'app/core/utils/kbn', 'app/plugins/sdk', './properties', 'lodash', 'moment', './series_overrides_heatmap_ctrl', './css/heatmap.css!'], function (_export, _context) {
	"use strict";

	var TimeSeries, kbn, MetricsPanelCtrl, heatmapEditor, displayEditor, pluginName, _, moment, _createClass, panelOptions, panelDefaults, HeatmapCtrl;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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
		var digits = color.replace(/[rgba\(\)\ ]/g, '').split(',');
		while (digits.length < 3) {
			digits.push(255);
		}

		var red = parseInt(digits[0]);
		var green = parseInt(digits[1]);
		var blue = parseInt(digits[2]);

		var rgba = blue | green << 8 | red << 16;
		return '#' + rgba.toString(16);
	}

	function getColorByXPercentage(canvas, xPercent) {
		var x = canvas.width * xPercent || 0;
		var context = canvas.getContext("2d");
		var p = context.getImageData(x, 1, 1, 1).data;
		var color = 'rgba(' + [p[0] + ',' + p[1] + ',' + p[2] + ',' + p[3]] + ')';
		return color;
	}

	return {
		setters: [function (_libsD3D) {}, function (_appCoreTime_series) {
			TimeSeries = _appCoreTime_series.default;
		}, function (_appCoreUtilsKbn) {
			kbn = _appCoreUtilsKbn.default;
		}, function (_appPluginsSdk) {
			MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
		}, function (_properties) {
			heatmapEditor = _properties.heatmapEditor;
			displayEditor = _properties.displayEditor;
			pluginName = _properties.pluginName;
		}, function (_lodash) {
			_ = _lodash.default;
		}, function (_moment) {
			moment = _moment.default;
		}, function (_series_overrides_heatmap_ctrl) {}, function (_cssHeatmapCss) {}],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			panelOptions = {
				aggregationFunctions: ['avg', 'min', 'max', 'total', 'current', 'count'],
				treeMap: {
					modes: ['squarify', 'slice', 'dice', 'slice-dice'],
					aggregationFunctions: ['sum', 'min', 'max', 'extent', 'mean', 'median', 'quantile', 'variance', 'deviation'],
					timestampFormats: ['YYYY-MM-DDTHH', 'YYYY-MM-DDTHH:mm', 'YYYY-MM-DDTHH:mm:ss', 'YYYY-MM-DDTHH:mm:ss.sssZ']
				}
			};
			panelDefaults = {
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
				valueMaps: [{ value: 'null', op: '=', text: 'N/A' }],
				treeMap: {
					mode: 'squarify',
					groups: [{ key: 'server', value: '/^.*\./g' }],
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

			_export('MetricsPanelCtrl', _export('HeatmapCtrl', HeatmapCtrl = function (_MetricsPanelCtrl) {
				_inherits(HeatmapCtrl, _MetricsPanelCtrl);

				function HeatmapCtrl($scope, $injector, $sce) {
					_classCallCheck(this, HeatmapCtrl);

					var _this2 = _possibleConstructorReturn(this, (HeatmapCtrl.__proto__ || Object.getPrototypeOf(HeatmapCtrl)).call(this, $scope, $injector));

					_.defaults(_this2.panel, panelDefaults);

					_this2.options = panelOptions;
					_this2.panel.chartId = 'chart_' + _this2.panel.id;
					_this2.containerDivId = 'container_' + _this2.panel.chartId;
					_this2.$sce = $sce;
					_this2.events.on('init-edit-mode', _this2.onInitEditMode.bind(_this2));
					_this2.events.on('data-received', _this2.onDataReceived.bind(_this2));
					_this2.events.on('data-snapshot-load', _this2.onDataReceived.bind(_this2));
					_this2.initializePanel();
					return _this2;
				}

				_createClass(HeatmapCtrl, [{
					key: 'initializePanel',
					value: function initializePanel() {
						var d3plusPath = 'plugins/' + pluginName + '/libs/d3plus/d3plus.full.js';
						var _this = this;
						var meta = {};
						meta[d3plusPath] = {
							format: 'global'
						};

						SystemJS.config({
							meta: meta
						});

						SystemJS.import(d3plusPath).then(function d3plusLoaded() {
							console.log('d3plus is loaded');
							_this.events.emit('data-received');
						});
					}
				}, {
					key: 'handleError',
					value: function handleError(err) {
						this.getPanelContainer().html('<p>Error:</p><pre>' + err + '</pre>');
					}
				}, {
					key: 'onInitEditMode',
					value: function onInitEditMode() {
						this.addEditorTab('Heatmap', heatmapEditor, 2);
						this.addEditorTab('Display', displayEditor, 3);
					}
				}, {
					key: 'getPanelContainer',
					value: function getPanelContainer() {
						return $(document.getElementById(this.containerDivId));
					}
				}, {
					key: 'onDataReceived',
					value: function onDataReceived(dataList) {
						console.info('received data');
						console.debug(dataList);
						if (undefined != dataList) {
							this.series = dataList.map(this.seriesHandler.bind(this));
							console.info('mapped dataList to series');
						}

						var preparedData = this.d3plusDataProcessor(this.series);
						this.render(preparedData);
					}
				}, {
					key: 'getGroupKeys',
					value: function getGroupKeys() {
						return this.panel.treeMap.groups.map(function (group) {
							return group.key;
						});
					}
				}, {
					key: 'd3plusDataProcessor',
					value: function d3plusDataProcessor(dataArray) {
						var resultArray = [];
						var hasGroups = this.panel.treeMap.groups.length > 0;

						if (!hasGroups) {
							// just add the original items since there are no groups
							for (var dataIndex = 0; dataIndex < dataArray.length; dataIndex++) {
								var newDataItem = Object.assign({}, dataArray[dataIndex], dataArray[dataIndex].stats);
								resultArray.push(newDataItem);
							}
						} else {
							// Process Groups
							var groupArray = [];
							for (var groupIndex = 0; groupIndex < this.panel.treeMap.groups.length; groupIndex++) {
								groupArray.push({
									key: this.panel.treeMap.groups[groupIndex].key,
									regex: kbn.stringToJsRegex(this.panel.treeMap.groups[groupIndex].value)
								});
							}
							for (var dataIndex = 0; dataIndex < dataArray.length; dataIndex++) {
								var newDataItem = Object.assign({}, dataArray[dataIndex]);
								// only add the stats if we arent using granular timeblock data
								if (!this.panel.treeMap.enableTimeBlocks) {
									Object.assign(newDataItem, dataArray[dataIndex].stats);
								}
								delete newDataItem.stats;

								for (var groupIndex = 0; groupIndex < groupArray.length; groupIndex++) {
									var key = groupArray[groupIndex].key;
									var regex = groupArray[groupIndex].regex;
									var matches = newDataItem.alias.match(regex);
									if (matches && matches.length > 0) {
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
						if (this.panel.treeMap.enableTimeBlocks) {
							console.info('creating timeblock records');
							var timeBlockArray = [];
							for (var dataIndex = 0; dataIndex < resultArray.length; dataIndex++) {
								console.debug('dataIndex:' + dataIndex + ', alias:' + resultArray[dataIndex].alias);
								var dataSeries = resultArray[dataIndex];
								for (var dataPointIndex = 0; dataPointIndex < dataSeries.flotpairs.length; dataPointIndex++) {
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
				}, {
					key: 'seriesHandler',
					value: function seriesHandler(seriesData) {
						var series = new TimeSeries({
							datapoints: seriesData.datapoints,
							alias: seriesData.target.replace(/"|,|;|=|:|{|}/g, '_')
						});
						series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
						return series;
					}
				}, {
					key: 'addSeriesOverride',
					value: function addSeriesOverride(override) {
						this.panel.seriesOverrides.push(override || {});
					}
				}, {
					key: 'addTreeMapGroup',
					value: function addTreeMapGroup(group) {
						this.panel.treeMap.groups.push(group || {});
					}
				}, {
					key: 'removeSeriesOverride',
					value: function removeSeriesOverride(override) {
						this.panel.seriesOverrides = _.without(this.panel.seriesOverrides, override);
						this.render();
					}
				}, {
					key: 'removeTreeMapGroup',
					value: function removeTreeMapGroup(group) {
						this.panel.treeMap.groups = _.without(this.panel.treeMap.groups, group);
						this.render();
					}
				}, {
					key: 'updateThresholds',
					value: function updateThresholds() {
						var thresholdCount = this.panel.thresholds.length;
						var colorCount = this.panel.colors.length;
						this.refresh();
					}
				}, {
					key: 'changeColor',
					value: function changeColor(colorIndex, color) {
						this.panel.colors[colorIndex] = color;
					}
				}, {
					key: 'removeColor',
					value: function removeColor(colorIndex) {
						this.panel.colors.splice(colorIndex, 1);
					}
				}, {
					key: 'addColor',
					value: function addColor() {
						this.panel.colors.push('rgba(255, 255, 255, 1)');
					}
				}, {
					key: 'getGradientForValue',
					value: function getGradientForValue(data, value) {
						var min = Math.min.apply(Math, data.thresholds);
						var max = Math.max.apply(Math, data.thresholds);
						var absoluteDistance = max - min;
						var valueDistanceFromMin = value - min;
						var xPercent = valueDistanceFromMin / absoluteDistance;
						// Get the smaller number to clamp at 0.99 max
						xPercent = Math.min(0.99, xPercent);
						// Get the larger number to clamp at 0.01 min
						xPercent = Math.max(0.01, xPercent);

						return getColorByXPercentage(this.canvas, xPercent);
					}
				}, {
					key: 'applyOverrides',
					value: function applyOverrides(seriesItemAlias) {
						var seriesItem = {},
						    colorData = {},
						    overrides = {};
						console.info('applying overrides for seriesItem');
						console.debug(seriesItemAlias);
						console.debug(this.panel.seriesOverrides);
						for (var i = 0; i <= this.panel.seriesOverrides.length; i++) {
							console.debug('comparing:');
							console.debug(this.panel.seriesOverrides[i]);
							if (this.panel.seriesOverrides[i] && this.panel.seriesOverrides[i].alias == seriesItemAlias) {
								overrides = this.panel.seriesOverrides[i];
							}
						}
						colorData.thresholds = (overrides.thresholds || this.panel.thresholds).split(',').map(function (strVale) {
							return Number(strVale.trim());
						});
						colorData.colorMap = this.panel.colors;
						seriesItem.colorData = colorData;

						seriesItem.valueName = overrides.valueName || this.panel.valueName;

						return seriesItem;
					}
				}, {
					key: 'invertColorOrder',
					value: function invertColorOrder() {
						this.panel.colors.reverse();
						this.refresh();
					}
				}, {
					key: 'addTreeMapId',
					value: function addTreeMapId() {
						this.panel.treeMap.ids.push('');
						this.refresh();
					}
				}, {
					key: 'removeTreeMapId',
					value: function removeTreeMapId(pos) {
						this.panel.treeMap.ids.splice(pos, 1);
						this.refresh();
					}
				}, {
					key: 'changeTreeMapId',
					value: function changeTreeMapId(idString, pos) {
						this.panel.treeMap.ids[pos] = idString;
					}
				}, {
					key: 'link',
					value: function link(scope, elem, attrs, ctrl) {
						var chartElement = elem.find('.heatmap');
						chartElement.append('<div id="' + ctrl.containerDivId + '"></div>');
						var chartContainer = $(document.getElementById(ctrl.containerDivId));
						console.debug('found chartContainer');
						console.debug(chartContainer);
						elem.css('height', ctrl.height + 'px');

						var canvas = elem.find('.canvas')[0];
						ctrl.canvas = canvas;
						var gradientValueMax = elem.find('.gradient-value-max')[0];
						var gradientValueMin = elem.find('.gradient-value-min')[0];

						var visFormat = {
							"text": function text(_text, opts) {
								if (opts.key == 'timestamp') {
									var timestamp = moment(Number(_text));
									return timestamp.format(ctrl.panel.treeMap.timestampFormat);
								} else if (ctrl.getGroupKeys().indexOf(opts.key) > -1) {
									return _text;
								} else {
									return d3plus.string.title(_text, opts);
								}
							}
						};

						function render(data) {
							updateSize();
							updateCanvasStyle();
							updateChart(data);
						}

						function updateCanvasStyle() {
							canvas.width = Math.max(chartElement[0].clientWidth, 100);
							var canvasContext = canvas.getContext("2d");
							canvasContext.clearRect(0, 0, canvas.width, canvas.height);

							var grd = canvasContext.createLinearGradient(0, 0, canvas.width, 0);
							var colorWidth = 1 / Math.max(ctrl.panel.colors.length, 1);
							for (var i = 0; i < ctrl.panel.colors.length; i++) {
								var currentColor = ctrl.panel.colors[i];
								grd.addColorStop(Math.min(colorWidth * i, 1), currentColor);
							}
							canvasContext.fillStyle = grd;
							canvasContext.fillRect(0, 0, canvas.width, 3);
							ctrl.canvasContext = canvasContext;

							gradientValueMax.innerText = Math.max.apply(Math, ctrl.panel.thresholds.split(','));
							gradientValueMin.innerText = Math.min.apply(Math, ctrl.panel.thresholds.split(','));
						}

						function updateSize() {
							elem.css('height', ctrl.height + 'px');
						}

						function getVisSize(dataPoint) {
							if (ctrl.panel.treeMap.sizeByFunction == 'constant') return 1;else {
								return dataPoint[ctrl.panel.treeMap.sizeByFunction] || dataPoint.value;
							}
						}

						function getVisColor(dataPoint) {
							var value = dataPoint[ctrl.panel.treeMap.colorByFunction] || dataPoint.value;
							var rgbColor = ctrl.getGradientForValue({ thresholds: ctrl.panel.thresholds.split(',') }, value);
							var hexColor = colorToHex(rgbColor);
							return hexColor;
						}

						function updateChart(data) {
							d3.select("#" + ctrl.containerDivId).selectAll('*').remove();

							// Make sure the necessary IDs are added
							var idKeys = Array.from(ctrl.panel.treeMap.ids);
							if (idKeys.length == 0) {
								ensureArrayContains(idKeys, 'alias');
							}
							if (ctrl.panel.treeMap.enableTimeBlocks) {
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

							d3plus.viz().dev(ctrl.panel.treeMap.debug).aggs(aggs).container("#" + ctrl.containerDivId).legend(ctrl.panel.treeMap.showLegend).data(data)
							//.type("tree_map")
							.type({ "mode": ctrl.panel.treeMap.mode }) // sets the mode of visualization display based on type    
							.id({
								"value": _.uniq(idKeys),
								"grouping": ctrl.panel.treeMap.enableGrouping
							}).depth(Number(ctrl.panel.treeMap.depth)).size(getVisSize).height(ctrl.height).width(ctrl.width).color(getVisColor).format(visFormat).draw();
						}

						this.events.on('render', function onRender(data) {
							if (typeof d3plus !== 'undefined' && data) {
								render(data);
								ctrl.renderingCompleted();
							} else {
								console.info('d3plus is not loaded yet');
							}
						});
					}
				}]);

				return HeatmapCtrl;
			}(MetricsPanelCtrl)));

			;HeatmapCtrl.templateUrl = 'module.html';

			_export('HeatmapCtrl', HeatmapCtrl);

			_export('MetricsPanelCtrl', HeatmapCtrl);
		}
	};
});
//# sourceMappingURL=heatmapControl.js.map
