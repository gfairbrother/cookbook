steal.plugins("jquery/controller", "ss/router/subscribe").then(function($) {

    $.Controller.extend('Intrepica.Controllers.Application',
/* @Static */
    {
        onDocument: true
    },
/* @Prototype */
    {
        "{window} load": function(){
             $('#menu').append(this.view('menu'));
        }
    })

});