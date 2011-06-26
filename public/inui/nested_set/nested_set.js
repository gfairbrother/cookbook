steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',        // lookup views with the controller's name
    'jquery/model'
        ).then(function(){           //called when all prior files have completed

        $.Controller.extend('Inui.NestedSet',
        /* @Static */
        {
            defaults: {tmpl:'nested_set'}
        },
        /* @Prototype */
        {
            init: function() {
                if (this.options.data) {
                    this.draw(this.options.data);
                }else if (this.options.model){
                    this.options.model.findAll({}, this.callback('draw', this.element))
                }
            },
            draw: function(el, data) {

                console.log(el);
//                if (el) {
//                    el.html(this.view(this.options.tmpl, data ));
//                } else {
                    el.html(this.view(this.options.tmpl, data ));
//                }
            },
            'li click': function(el) {
                console.log(el.model())
                var id = el.model().id;
                this.options.model.findAll({id:id}, this.callback('draw', el))
            }
        })

})
