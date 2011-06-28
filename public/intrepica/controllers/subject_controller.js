/**
 * @tag controllers, home
 * Displays a table of subjects.	 Lets the user 
 * ["Intrepica.Controllers.Subject.prototype.form submit" create], 
 * ["Intrepica.Controllers.Subject.prototype.&#46;edit click" edit],
 * or ["Intrepica.Controllers.Subject.prototype.&#46;destroy click" destroy] subjects.
 */

steal.plugins("jquery/controller", "ss/router/subscribe").then(function($) {
    $.Controller.extend('Intrepica.Controllers.Subject',
    /* @Static */
    {
        onDocument: true,
        menuStyle:'inui_nested_set'
    },
    /* @Prototype */
    {
     "/subjects(/:id) route": function(path, params){

        $('#content').html(this.view('tree'));

        $('#subjects').inui_nested_set({
            model: Intrepica.Models.Subject,
            id: params.id
        });


//        $('#content').html(this.view('column_navigation'));
//
//        $('#subjects').inui_column_navigation({
//            model: Intrepica.Models.Subject,
//            id: params.id
//        });


     }
    });
});