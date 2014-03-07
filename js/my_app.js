var myApp = (function(module) {
	
	module.setElementHTML = function(elementObject, newContent){
		elementObject.html(newContent);
	}
	
	
	return module;
}(myApp || {}));