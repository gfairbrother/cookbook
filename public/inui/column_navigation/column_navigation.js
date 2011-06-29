steal.plugins(
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',        // lookup views with the controller's name
    'jquery/model'

        )
      .css('column_navigation', 'tabs')
        .then(function(){           //called when all prior files have completed

        $.Controller.extend('Inui.ColumnNavigation',
        /* @Static */
        {
            defaults: {
                id:''
            }
        },
        /* @Prototype */
        {
            init: function() {
                this.options.model.findAll({id:this.options.id}, this.callback('drawTabs', this.tabs))
            },

            drawTabs: function(el, data) {
                var $view = $(this.view('tabs', data )).hide();
                $view.appendTo(this.element).fadeIn();

                this.container = this.element.append(this.view('container')).find('.container').first();
            },

            draw: function(el, data) {
                if (data.length) {
                    var $view = $(this.view('panel', data )).hide();
                    $view.appendTo(this.container).fadeIn();
                }
            },

            'li click': function(li, ev) {
				if(li.children().length <= 1){
                    var model = li.model();
                    var $panels = $('.panel');
                    var diff = $panels.size() - (model.level-1);
                    if (diff) {
                        $('.panel').slice(-diff).fadeOut('fast').remove();
                    }
                    this.options.model.findAll({id:model.id}, this.callback('draw', li))
                    li.parent().find('li').removeClass('selected')
                    li.addClass('selected')
				}
            }

        })

})
