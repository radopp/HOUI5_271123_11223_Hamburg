sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/base/Log"
],
    function (Controller, History, Log) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.BaseController", {

            getModel: function (sModelName) {
                return this.getView().getModel(sModelName);
            }



        });
    });