sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "at/clouddna/training00/zhoui5/data/formatter/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Main", {

            formatter: Formatter,

            onInit: function () {
            },

            onItemPress: function (oEvent) {
                let oRouter = this.getOwnerComponent().getRouter();

                let sPath = oEvent.getSource().getBindingContext().getPath();

                oRouter.navTo("RouteCustomer", { path: encodeURIComponent(sPath) });
            },

            onCreatePress: function (oEvent) {
                let oModel = this.getView().getModel(),
                    sPath = oModel.createEntry("Z_P_CUSTOMER").getPath();


                this.getOwnerComponent().getRouter().navTo("CreateCustomer", { path: encodeURIComponent(sPath) });

            }
        });
    });
