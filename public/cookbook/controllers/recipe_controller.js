/**
 * @tag controllers, home
 * Displays a table of recipes.	 Lets the user 
 * ["Cookbook.Controllers.Recipe.prototype.form submit" create], 
 * ["Cookbook.Controllers.Recipe.prototype.&#46;edit click" edit],
 * or ["Cookbook.Controllers.Recipe.prototype.&#46;destroy click" destroy] recipes.
 */
steal.plugins("jquery/controller", "ss/router/subscribe").then(function($) {

$.Controller.extend('Cookbook.Controllers.Recipe',
/* @Static */
{
	onDocument: true
},
/* @Prototype */
{
 /**
 * When the page loads, gets all recipes to be displayed.
 */
// "{window} load": function(){
 "/cookbook/recipes route": function(){
    if(!$("#recipe").length){
        $(document.body).append($('<div/>').attr('id','recipe'));
        Cookbook.Models.Recipe.findAll({}, this.callback('list'));
    }
 },

 /**
 * Displays a list of recipes and the submit form.
 * @param {Array} recipes An array of Cookbook.Models.Recipe objects.
 */
 list: function( recipes ){
	$('#recipe').html(this.view('init', {recipes:recipes} ));
 },
 /**
 * Responds to the create form being submitted by creating a new Cookbook.Models.Recipe.
 * @param {jQuery} el A jQuery wrapped element.
 * @param {Event} ev A jQuery event whose default action is prevented.
 */
'form submit': function( el, ev ){
	ev.preventDefault();
	var model = new Cookbook.Models.Recipe(el.formParams());

    if (this.validate(model)) {
        model.update(el.formParams());
    }

},

validate: function(model) {
  if (model.errors()) {
      this.renderErrors( model.errors() );
      return false;
  }else{
      return true;
  }
},

renderErrors: function(errors){
    console.log(errors)
  $('#errors').html(this.view('errors', errors ))
},

/**
 * Listens for recipes being created.	 When a recipe is created, displays the new recipe.
 * @param {String} called The open ajax event that was called.
 * @param {Event} recipe The new recipe.
 */
'recipe.created subscribe': function( called, recipe ){
	$("#recipe tbody").append( this.view("list", {recipes:[recipe]}) );
	$("#recipe form input[type!=submit]").val(""); //clear old vals
},
 /**
 * Creates and places the edit interface.
 * @param {jQuery} el The recipe's edit link element.
 */
'.edit click': function( el ){
	var recipe = el.closest('.recipe').model();
	recipe.elements().html(this.view('edit', recipe));
},


'/cookbook/recipes/:id route': function(path, params) {
    Cookbook.Models.Recipe.findOne({id:params.id}, this.callback('show_one'));
},


show_one: function( recipe ){
    $(document.body).append($('<div/>'))
                    .html(this.view('show', recipe));
},

 /**
 * Removes the edit interface.
 * @param {jQuery} el The recipe's cancel link element.
 */
'.cancel click': function( el ){
	this.show(el.closest('.recipe').model());
},
 /**
 * Updates the recipe from the edit values.
 */
//'.update click': function( el ){
//	var $recipe = el.closest('.recipe');
//    var model = $recipe.model();
//    model.attrs($recipe.formParams());

//    var errors = model.errors();
//
//    if(!errors){
//      model.update();
//    }
//},

'.update click': function( el ){
	var $recipe = el.closest('.recipe');
    var model = $recipe.model();

    model.attrs($recipe.formParams());

    var self = this;

    if (this.validate(model)) {
        model.update(
            $recipe.formParams(),
            function(){
//                alert("success");
            },
            function(xhr, errorType) {
                console.log(xhr.responseText)
                self.renderErrors( $.parseJSON(xhr.responseText)) ;
            }
        )
    }
//    var model = $recipe.model();
//    model.update($recipe.formParams());
//
//    var errors = model.errors();
//    if (errors) {
//        alert("");
//    }
    //$recipe.model().update($recipe.formParams(), function(){}, error);
},


//'.update click': function( el ){
//	var $recipe = el.closest('.recipe');
//    var model = $recipe.model();
//    model.attrs($recipe.formParams());
//    var errors = model.errors();
//
//    if(!errors){
//      model.update();
//    } else {
//      this.renderErrors(errors)
//    }
//
//    //$recipe.model().update($recipe.formParams(), function(){}, error);
//},

//'.update click': function( el ){
//	var $recipe = el.closest('.recipe');
//    var model = $recipe.model();
//    //model.attrs($recipe.formParams(), function(){}, this.callback('renderErrors'));
//    var error = this.callback("renderErrors");
//    model.update($recipe.formParams(), function(){}, error);
////    model.update();
////    if (!model.update()) {
////        this.renderErrors(model.errors());
////    }
////    var error = this.callback("renderErrors");
////    $recipe.model().update($recipe.formParams(), function(){}, error);
//},


 /**
 * Listens for updated recipes.	 When a recipe is updated, 
 * update's its display.
 */
'recipe.updated subscribe': function( called, recipe ){
	this.show(recipe);
},
 /**
 * Shows a recipe's information.
 */
show: function( recipe ){
	recipe.elements().html(this.view('show',recipe));
},
 /**
 *	 Handle's clicking on a recipe's destroy link.
 */
'.destroy click': function( el ){
	if(confirm("Are you sure you want to destroy?")){
		el.closest('.recipe').model().destroy();
	}
 },
 /**
 *	 Listens for recipes being destroyed and removes them from being displayed.
 */
"recipe.destroyed subscribe": function(called, recipe){
	recipe.elements().remove();	 //removes ALL elements
 }
});



});