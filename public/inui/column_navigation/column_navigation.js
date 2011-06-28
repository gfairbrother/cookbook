steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',        // lookup views with the controller's name
    'jquery/model')
      .css('column_navigation')
        .then(function(){           //called when all prior files have completed

        $.Controller.extend('Inui.ColumnNavigation',
        /* @Static */
        {
            defaults: {
                tmpl:'column_navigation',
                id:''
            }
        },
        /* @Prototype */
        {
            init: function() {
                this.options.model.findAll({id:this.options.id}, this.callback('draw', this.element))
            },

            draw: function(el, data) {
                var $view = $(this.view(this.options.tmpl, data ));
                $view.appendTo(el);
            },

            'li click': function(li, ev) {
				if(li.children().length <= 1){
                    var id = li.model().id;
                    this.options.model.findAll({id:id}, this.callback('draw', li))
				}
            }

        })

})
