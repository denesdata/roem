'use strict';

System.register(['./properties', './heatmapControl'], function (_export, _context) {
  "use strict";

  var pluginName, HeatmapCtrl;
  return {
    setters: [function (_properties) {
      pluginName = _properties.pluginName;
    }, function (_heatmapControl) {
      HeatmapCtrl = _heatmapControl.HeatmapCtrl;
    }],
    execute: function () {
      _export('PanelCtrl', HeatmapCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
