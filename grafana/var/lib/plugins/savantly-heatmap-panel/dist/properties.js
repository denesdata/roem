'use strict';

System.register([], function (_export, _context) {
	"use strict";

	var pluginName, heatmapEditor, displayEditor;
	return {
		setters: [],
		execute: function () {
			_export('pluginName', pluginName = 'savantly-heatmap-panel');

			_export('heatmapEditor', heatmapEditor = 'public/plugins/' + pluginName + '/heatmapEditor.html');

			_export('displayEditor', displayEditor = 'public/plugins/' + pluginName + '/displayEditor.html');

			_export('pluginName', pluginName);

			_export('heatmapEditor', heatmapEditor);

			_export('displayEditor', displayEditor);
		}
	};
});
//# sourceMappingURL=properties.js.map
