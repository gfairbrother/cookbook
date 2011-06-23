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
        defaults: {}
    },
    /* @Prototype */
    {
        init: function() {
            if (this.options.data) {
                this.draw(this.options.data);
            }
        },
        draw: function(data) {
            this.element.html(this.view('init', data ));
        }

    })

//    console.log($('').controllers());

    $('#tree_view').tree_view(
    {
            data: [
                {
                    text:'Spelling',
                    hasChildren: true,
                    children: [
                                {
                                    text:'Level 1',
                                    hasChildren: true,
                                    children: [
                                                {
                                                    text:'Unit 1',
                                                    hasChildren: false
                                                }
                                    ]
                                },
                                {
                                    text:'Level 2',
                                    hasChildren: false,
                                    children: [

                                    ]
                                }
                    ]
                },
                { text:'Phonics', hasChildren:false }
            ]

    }
    );



})
