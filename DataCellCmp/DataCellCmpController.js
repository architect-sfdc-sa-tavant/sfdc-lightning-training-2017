({
	doInit : function(component, event, helper) {
		
        var record = component.get("v.record");
        var fieldName = component.get("v.fieldName");
        if(record!=null && fieldName!=null && record[fieldName]!=null && record[fieldName]!=""){
            component.set("v.output",record[fieldName]);
        }
        else{
            component.set("v.output","----");
        }
        
        
	}
})