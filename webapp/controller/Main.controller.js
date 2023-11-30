sap.ui.define([
    "at/clouddna/training00/zhoui5/controller/BaseController",
    "at/clouddna/training00/zhoui5/data/formatter/Formatter",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Formatter, MessageBox) {
        "use strict";

        return BaseController.extend("at.clouddna.training00.zhoui5.controller.Main", {

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

            },

            onDeletePress: function (oEvent) {
                let sSelectedPath = oEvent.getParameter("listItem").getBindingContext().getPath();

                this.getView().getModel().remove(sSelectedPath, {
                    success: function (oData, response) {
                        this.getView().getModel().refresh();
                        MessageBox.success("Erfolgreich gelöscht");
                    }.bind(this),
                    error: (oError) => {
                        console.error(oError);
                    }
                });
            }
        });
    });
