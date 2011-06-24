steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
  'jquery/model/validations',					// validations
	//'jquery/dom/fixture',			// simulated Ajax requests
    'inui/tree_view',
    'ss/router/controller',         //http://secondstory.github.com/secondstoryjs-router/
	'jquery/dom/form_params')		// form data helper

	.css('cookbook')	// loads styles

	.resources()					// 3rd party script's (like jQueryUI), in resources folder

	.models('recipe')						// loads files in models folder

	.controllers('recipe')	// loads files in controllers folder

	.views()						// adds views to be added to build

    .then(function($){

    Router.add("/cookbook/recipes").to("cookbook_recipes");
    Router.add("/cookbook/recipes/:id").to("show_cookbook_recipes");
//    console.log(Router.recognize('/cookbook/recipes/1/edit'))

//    var key = window.location.pathname,
//            foundRoute = Router.recognize(key);
//
//    if (foundRoute && $(document)[foundRoute.destination]) {
//        $(document)[foundRoute.destination](foundRoute.params);
//    }

//    Router.add("/about").to("my");
//    console.log(Router.recognize('/about'))



    })