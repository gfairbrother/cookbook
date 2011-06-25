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

 "/subjects route": function(){
	if(!$("#subject").length){
	 $(document.body).append($('<div/>').attr('id','subject'));
		 Intrepica.Models.Subject.findAll({}, this.callback('list'));
 	}
 },


 /**
 * When the page loads, gets all subjects to be displayed.
 */
// "{window} load": function(){
//	if(!$("#subject").length){
//	 $(document.body).append($('<div/>').attr('id','subject'));
//		 Intrepica.Models.Subject.findAll({}, this.callback('list'));
// 	}
// },
 /**
 * Displays a list of subjects and the submit form.
 * @param {Array} subjects An array of Intrepica.Models.Subject objects.
 */
 list: function( subjects ){
	$('#subject').html(this.view('init', {subjects:subjects} ));
 },
 /**
 * Responds to the create form being submitted by creating a new Intrepica.Models.Subject.
 * @param {jQuery} el A jQuery wrapped element.
 * @param {Event} ev A jQuery event whose default action is prevented.
 */
'form submit': function( el, ev ){
	ev.preventDefault();
	new Intrepica.Models.Subject(el.formParams()).save();
},
/**
 * Listens for subjects being created.	 When a subject is created, displays the new subject.
 * @param {String} called The open ajax event that was called.
 * @param {Event} subject The new subject.
 */
'subject.created subscribe': function( called, subject ){
	$("#subject tbody").append( this.view("list", {subjects:[subject]}) );
	$("#subject form input[type!=submit]").val(""); //clear old vals
},
 /**
 * Creates and places the edit interface.
 * @param {jQuery} el The subject's edit link element.
 */
'.edit click': function( el ){
	var subject = el.closest('.subject').model();
	subject.elements().html(this.view('edit', subject));
},
 /**
 * Removes the edit interface.
 * @param {jQuery} el The subject's cancel link element.
 */
'.cancel click': function( el ){
	this.show(el.closest('.subject').model());
},
 /**
 * Updates the subject from the edit values.
 */
'.update click': function( el ){
	var $subject = el.closest('.subject'); 
	$subject.model().update($subject.formParams());
},
 /**
 * Listens for updated subjects.	 When a subject is updated, 
 * update's its display.
 */
'subject.updated subscribe': function( called, subject ){
	this.show(subject);
},
 /**
 * Shows a subject's information.
 */
show: function( subject ){
	subject.elements().html(this.view('show',subject));
},
 /**
 *	 Handle's clicking on a subject's destroy link.
 */
'.destroy click': function( el ){
	if(confirm("Are you sure you want to destroy?")){
		el.closest('.subject').model().destroy();
	}
 },
 /**
 *	 Listens for subjects being destroyed and removes them from being displayed.
 */
"subject.destroyed subscribe": function(called, subject){
	subject.elements().remove();	 //removes ALL elements
 }
});

});