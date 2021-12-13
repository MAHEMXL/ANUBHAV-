sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Spiderman) {
    'use strict';
    //extend means we are inheriting from parent module
    return Spiderman.extend("mickey.controller.MyView",{
        //since its a module (class), we have constructor of this class
        //as onInit which gets called by framework when object of this class is
        //created
        onInit: function(){
            //alert("Controller object is now created");

            //Step 1 : Create a brand new model object
            var oModel = new sap.ui.model.json.JSONModel();
            //Step 2 : Set or Load data into the model
            oModel.setData(
            {
                "empStr": {
                            "empId": 1009,
                            "empName": "Anubhav",
                            "salary": 9500,
                            "currency": "EUR",
                            "smoker": false,
                            "gender": "M",
                            "age": 32,
                            "nationality": "IN"
                        },
                "empTab": []
            });
            //Step 3 : Make the model aware to the application/view/control so they can load data from model
            sap.ui.getCore().setModel(oModel);
        },
        onClick: function(){
            alert(this.getView().byId("myField").getValue());
        },
        onLogin: function(){
            var sUser = this.getView().byId("idUser").getValue();
            var sPassword = this.getView().byId("idPassword").getValue();
            if(sUser === sPassword && sUser && sPassword){
                alert("Login success!");
            }else {
                alert("Wrong Credentials");
            }
        }
    });
});