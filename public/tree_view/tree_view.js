steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
  'jquery/model/validations',					// validations
	//'jquery/dom/fixture',			// simulated Ajax requests
	'jquery/dom/form_params')		// form data helper


    .then(function(){           //called when all prior files have completed

    $.Controller.extend('TreeView',
    /* @Static */
    {
        onDocument: true,
        defaults: {
            data: [
                { text:'Spelling', hasChildren:false },
                { text:'Phonics', hasChildren:false }
            ]
        }
    },
    /* @Prototype */
    {
        init: function() {
            if(!$("#tree").length){
             $(document.body).append($('<div/>').attr('id','tree'));
                 //Cookbook.Models.Recipe.findAll({}, this.callback('list'));
                console.log(this)
                $('#tree').html(this.view('init', {data:this.options.data} ));
            }
        }

    })


//    $(document).controllers();



})
