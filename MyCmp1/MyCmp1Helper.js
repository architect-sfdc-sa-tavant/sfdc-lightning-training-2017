({
    //business logic handler method
	nameHandler : function(component,event) {
		
        //safe initialization
        var self = this;
        
        //get the value
        var name  = component.find("name").get("v.value");
        
        //validation
        var validated = self.validateInput(name);
        
        if(validated){
            
            //remove error class if already added
            if($A.util.hasClass(component.find("name") , 'slds-has-error')){
                $A.util.removeClass(component.find("name") , 'slds-has-error');
            }
            component.find("name").set("v.errors",null);
           console.log("Name received - " + name);
        }
        
        else{
            
            if(! $A.util.hasClass(component.find("name") , 'slds-has-error')){
                $A.util.addClass(component.find("name") , 'slds-has-error');
            }
            component.find("name").set("v.errors",[{"message":"Name should be alphabetical"}]);
            
        }
        
        
        
	},
    
    validateInput : function(input){
        
        var validated = false;
        
        var expression = new RegExp('[A-Za-z]');
        if(input!=null && input.match(expression)){
            validated  = true;
        }
        
        return validated;
        
    }
})