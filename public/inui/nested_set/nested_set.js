steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',        // lookup views with the controller's name
    'jquery/model',
    'mxui/layout/tree').then(function(){           //called when all prior files have completed

        $.Controller.extend('Inui.NestedSet',
        /* @Static */
        {
            defaults: {
                tmpl:'nested_set',
                effect: 'slideDown',
                id:''
            }
        },
        /* @Prototype */
        {
            init: function() {
                this.element.mxui_layout_tree();
                this.tree = this.element.controller(Mxui.Layout.Tree)
                this.options.model.findAll({id:this.options.id}, this.callback('draw', this.element))
            },

            draw: function(el, data) {
                var $view = $(this.view(this.options.tmpl, data )).hide();
                this.tree.styleUL($view).appendTo(el)[this.options.effect]();
            },

            'li click': function(li, ev) {
				if(li.children().length <= 1){
                    var id = li.model().id;
                    this.options.model.findAll({id:id}, this.callback('draw', li))
				}
            }

        })

})
