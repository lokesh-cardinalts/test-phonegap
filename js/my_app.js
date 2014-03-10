var myApp = (function(module) {
	
	// Wait for device API libraries to load	//
	module.init = function() {
		document.addEventListener("deviceready", this.onDeviceReady, false);
		document.addEventListener("pause", this.onPause, false);
		document.addEventListener("resume", this.onResume, false);
		document.addEventListener("backbutton", this.onBackKeyDown, false);
		document.addEventListener("menubutton", this.onMenuKeyDown, false);
	};
	
	// device APIs are available. Now safe to use device APIs
	module.onDeviceReady = function () {
		alert('API Ready');
	};

	// Handle the pause event
	module.onPause = function() {
	};
	
	// Handle the pause event
	module.onResume = function() {
		setTimeout(function() {
			alert('Welcome Back');
		}, 0);
	};

	// Handle the back button
	module.onBackKeyDown = function() {
			alert('Goin Back');
	};

	// Handle the back button
	module.onMenuKeyDown = function() {
			alert('Goin Menu');
	};

	return module;
}(myApp || {}));