
// fixes one issue with sherpa but then another issue appears (IE)
// I posted an issue
// https://github.com/secondstory/secondstoryjs-router/issues/2
// I tried upgrading sherpa but gave me require issues. If they can't solve it then look at upgrading sherpa again.
//if (!Array.prototype.indexOf) {
//    Array.prototype.indexOf = function(obj, start) {
//         for (var i = (start || 0), j = this.length; i < j; i++) {
//             if (this[i] === obj) { return i; }
//         }
//         return -1;
//    }
//}

steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
//  'jquery/model/validations',					// validations
	//'jquery/dom/fixture',			// simulated Ajax requests
    'inui/nested_set', 'inui/column_navigation',
    'ss/router/controller',         //http://secondstory.github.com/secondstoryjs-router/
	'jquery/dom/form_params')		// form data helper
	
	.css('intrepica', '/inui/tree/tree', '/inui/column_navigation/column_navigation')	// loads styles

	.resources()					// 3rd party script's (like jQueryUI), in resources folder

	.models('subject')						// loads files in models folder

	.controllers('application', 'subject')	    			// loads files in controllers folder

	.views()						// adds views to be added to build

    .then(function($){

        Router.add("/subjects(/:id)").to("subjects").name('subjects');





})