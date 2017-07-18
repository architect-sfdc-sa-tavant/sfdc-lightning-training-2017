({
    markUnMark : function(component, event, helper) {
        
        var markUnMarkEvt = component.getEvent("markUnMark");
        markUnMarkEvt.setParams({
            "target" : {
                "selected":event.getSource().get("v.value"),
                "record" :  component.get("v.record"),
                "index" :  component.get("v.index"),
            }
            
        });
        markUnMarkEvt.fire();
        
    }
    
}
 })