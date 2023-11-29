sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Customer", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteCustomer").attachPatternMatched(this.onPatternMatched.bind(this));

                let oJsonModel = new JSONModel({
                    editMode: true
                });

                this.getView().setModel(oJsonModel, "viewModel");
            },

            onPatternMatched: function (oEvent) {
                let oArguments = oEvent.getParameter("arguments");
                let sPath = decodeURIComponent(oArguments.path);
                //Parameter verwenden

                this.getView().bindElement(sPath);
            }

        });
    });
