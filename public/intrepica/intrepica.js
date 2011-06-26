steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
//  'jquery/model/validations',					// validations
	//'jquery/dom/fixture',			// simulated Ajax requests
    'inui/nested_set',
    'ss/router/controller',         //http://secondstory.github.com/secondstoryjs-router/
	'jquery/dom/form_params')		// form data helper
	
	.css('intrepica')	// loads styles

	.resources()					// 3rd party script's (like jQueryUI), in resources folder

	.models('subject')						// loads files in models folder

	.controllers('application', 'subject')	    			// loads files in controllers folder

	.views()						// adds views to be added to build

    .then(function($){

        Router.add("/subjects").to("subjects");

//    Router.add("/intrepica/recipes/:id").to("show_cookbook_recipes");



})