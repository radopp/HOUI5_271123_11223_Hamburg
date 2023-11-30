sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "at/clouddna/training00/zhoui5/data/formatter/Formatter",
    "sap/m/MessageBox",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment, Formatter, MessageBox, History) {
        "use strict";

        return Controller.extend("at.clouddna.training00.zhoui5.controller.Customer", {

            _fragmentList: {},
            formatter: Formatter,

            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteCustomer").attachPatternMatched(this.onPatternMatched.bind(this));
                this.getOwnerComponent().getRouter().getRoute("CreateCustomer").attachPatternMatched(this.onCreateCustomerMatched.bind(this));

                let oJsonModel = new JSONModel({
                    editMode: false
                });

                this.getView().setModel(oJsonModel, "viewModel");

            },

            onPatternMatched: function (oEvent) {
                let oArguments = oEvent.getParameter("arguments");
                let sPath = decodeURIComponent(oArguments.path);
                //Parameter verwenden

                this.getView().bindElement(sPath);
                this._showCustomerFragment("DisplayCustomer");

            },

            onCreateCustomerMatched: function (oEvent) {
                let oArguments = oEvent.getParameter("arguments");
                let sPath = decodeURIComponent(oArguments.path);
                //Parameter verwenden

                this.getView().bindElement(sPath);
                this._toggleEdit(true);
            },

            _showCustomerFragment: function (sFragmentName) {
                let oObjectPage = this.getView().byId("ObjectPageLayout");
                oObjectPage.removeAllSections();

                let fnAfterLoading = function (oFragment) {
                    this._fragmentList[sFragmentName] = oFragment;
                    oObjectPage.addSection(oFragment);
                }.bind(this);

                if (!this._fragmentList[sFragmentName]) {
                    Fragment.load({
                        name: "at.clouddna.training00.zhoui5.view.fragment." + sFragmentName,
                        controller: this
                    }).then(fnAfterLoading);
                } else {
                    oObjectPage.addSection(this._fragmentList[sFragmentName]);
                }
            },

            _toggleEdit: function (bEditMode) {
                let oViewModel = this.getView().getModel("viewModel");

                oViewModel.setProperty("/editMode", bEditMode);

                this._showCustomerFragment(bEditMode ? "ChangeCustomer" : "DisplayCustomer");
            },

            onEditPress: function (oEvent) {
                this._toggleEdit(true);
            },

            onCancelPress: function (oEvent) {
                this._toggleEdit(false);

                this.getView().getModel().resetChanges();
            },

            onSavePress: function (oEvent) {
                this._toggleEdit(false);

                this.getView().getModel().submitChanges({
                    success: function (oData, response) {
                        MessageBox.success("Erfolgreich gespeichert!");
                        this.onNavBack();
                    }.bind(this),
                    error: function (oErorr) {
                        MessageBox.error("Speichern fehlgeschlagen");
                    }.bind(this)
                });

            },

            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
            
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteMain", {}, true);
                }
            },



        });
    });
