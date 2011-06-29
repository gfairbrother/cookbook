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
        onDocument: true
    },
    /* @Prototype */
    {
     "/subjects(/:type(/:id)) route": function(path, params){

        if (params.type == "tree") {

            $('#content').html(this.view('nested_set'));

            $('#subjects').inui_nested_set({
                model: Intrepica.Models.Subject,
                id: params.id
            });

        }else{

            $('#content').html(this.view('column_navigation'));

            $('#columns').inui_column_navigation({
                model: Intrepica.Models.Subject,
                id: params.id
            });

        }
     }


    });
});