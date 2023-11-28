sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Main", {
            onInit: function () {

            },

            dateFormatter: function (sDate) {
                let dateObj = new Date(sDate);

                return dateObj.getDate() + "." + (dateObj.getMonth() + 1) + "." + dateObj.getFullYear();
            },

            genderFormatter: function (sKey) {
                let oView = this.getView(),
                    oResourceModel = oView.getModel("i18n"),
                    oResourceBundle = oResourceModel.getResourceBundle(),
                    sText = oResourceBundle.getText(sKey);

                return sText;
            },

            onItemPress: function (oEvent) {
                debugger;
            }
        });
    });
