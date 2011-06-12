/**
 * @tag controllers, home
 * Displays a table of ingredients.	 Lets the user 
 * ["Cookbook.Controllers.Ingredient.prototype.form submit" create], 
 * ["Cookbook.Controllers.Ingredient.prototype.&#46;edit click" edit],
 * or ["Cookbook.Controllers.Ingredient.prototype.&#46;destroy click" destroy] ingredients.
 */
$.Controller.extend('Cookbook.Controllers.Ingredient',
/* @Static */
{
	onDocument: true
},
/* @Prototype */
{
 /**
 * When the page loads, gets all ingredients to be displayed.
 */
 load: function(){
	if(!$("#ingredient").length){
	 $(document.body).append($('<div/>').attr('id','ingredient'));
		 Cookbook.Models.Ingredient.findAll({}, this.callback('list'));
 	}
 },
 /**
 * Displays a list of ingredients and the submit form.
 * @param {Array} ingredients An array of Cookbook.Models.Ingredient objects.
 */
 list: function( ingredients ){
	$('#ingredient').html(this.view('init', {ingredients:ingredients} ));
 },
 /**
 * Responds to the create form being submitted by creating a new Cookbook.Models.Ingredient.
 * @param {jQuery} el A jQuery wrapped element.
 * @param {Event} ev A jQuery event whose default action is prevented.
 */
'form submit': function( el, ev ){
	ev.preventDefault();
	new Cookbook.Models.Ingredient(el.formParams()).save();
},
/**
 * Listens for ingredients being created.	 When a ingredient is created, displays the new ingredient.
 * @param {String} called The open ajax event that was called.
 * @param {Event} ingredient The new ingredient.
 */
'ingredient.created subscribe': function( called, ingredient ){
	$("#ingredient tbody").append( this.view("list", {ingredients:[ingredient]}) );
	$("#ingredient form input[type!=submit]").val(""); //clear old vals
},
 /**
 * Creates and places the edit interface.
 * @param {jQuery} el The ingredient's edit link element.
 */
'.edit click': function( el ){
	var ingredient = el.closest('.ingredient').model();
	ingredient.elements().html(this.view('edit', ingredient));
},
 /**
 * Removes the edit interface.
 * @param {jQuery} el The ingredient's cancel link element.
 */
'.cancel click': function( el ){
	this.show(el.closest('.ingredient').model());
},
 /**
 * Updates the ingredient from the edit values.
 */
'.update click': function( el ){
	var $ingredient = el.closest('.ingredient'); 
	$ingredient.model().update($ingredient.formParams());
},
 /**
 * Listens for updated ingredients.	 When a ingredient is updated, 
 * update's its display.
 */
'ingredient.updated subscribe': function( called, ingredient ){
	this.show(ingredient);
},
 /**
 * Shows a ingredient's information.
 */
show: function( ingredient ){
	ingredient.elements().html(this.view('show',ingredient));
},
 /**
 *	 Handle's clicking on a ingredient's destroy link.
 */
'.destroy click': function( el ){
	if(confirm("Are you sure you want to destroy?")){
		el.closest('.ingredient').model().destroy();
	}
 },
 /**
 *	 Listens for ingredients being destroyed and removes them from being displayed.
 */
"ingredient.destroyed subscribe": function(called, ingredient){
	ingredient.elements().remove();	 //removes ALL elements
 }
});