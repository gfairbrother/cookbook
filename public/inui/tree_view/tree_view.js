steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',        // lookup views with the controller's name
    'jquery/model'
        ).then(function(){           //called when all prior files have completed

        $.Controller.extend('Inui.TreeView',
        /* @Static */
        {
            defaults: {}
        },
        /* @Prototype */
        {
            init: function() {
                if (this.options.data) {
                    this.draw(this.options.data);
                }else if (this.options.model){
                    this.options.model.findAll({}, this.callback('draw'))
                }
            },
            draw: function(data) {
    //            console.log(data);
                this.element.html(this.view('tree', data ));
            },
            'li click': function(el) {
                console.log(el.model())
            }
        })

})
