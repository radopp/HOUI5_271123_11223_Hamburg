sap.ui.define([], function () {
    "use strict";
    return {

        date: function (sDate) {
            let dateObj = new Date(sDate);

            return dateObj.getDate() + "." + (dateObj.getMonth() + 1) + "." + dateObj.getFullYear();
        },

        gender: function (sKey) {
            let oView = this.getView(),
                oResourceModel = oView.getModel("i18n"),
                oResourceBundle = oResourceModel.getResourceBundle(),
                sText;

            if (sKey === "1") {
                sText = oResourceBundle.getText("female");
            } else {
                sText = oResourceBundle.getText("male");
            }

            return sText;
        }



    }

});