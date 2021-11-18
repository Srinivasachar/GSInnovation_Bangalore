/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gsinnovation./gs_innovation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
