sap.ui.jsview("mickey.view.Main",{

    getControllerName: function(){
        return "mickey.controller.Main";
    },
    createContent: function(oController){
        //UI5 SDK will help us know the Button and other control
        var oBtn = new sap.m.Button({
            text: "Click me",
            press: function () {
                alert("wecome anubhav");
            }
        });

        return oBtn;

    }

});