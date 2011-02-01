/**
 * @projectDescription Custom Javascript for Symantec Project
 * 
 * @author Tyler Brandt
 * @version 1.0
 */

require.ready(function() {
	//This function is called when the page is loaded (the DOMContentLoaded
	//event) and when all required scripts are loaded.

	//Do nested require() calls in here if you want to load code
	//after page load.
	
	require(["test_mod"],function(test_mod) {
		// do some stuff with it
		console.info("test_func returns: " + test_mod.test_func());
	});
	
	require(["test_mod2"],function(tm2) {
		console.info("test_mod2 test_func returns: " + tm2.test_func());
	});
	
});