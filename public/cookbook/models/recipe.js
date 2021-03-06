/**
 * @tag models, home
 * Wraps backend recipe services.  Enables 
 * [Cookbook.Models.Recipe.static.findAll retrieving],
 * [Cookbook.Models.Recipe.static.update updating],
 * [Cookbook.Models.Recipe.static.destroy destroying], and
 * [Cookbook.Models.Recipe.static.create creating] recipes.
 */
$.Model.extend('Cookbook.Models.Recipe',
/* @Static */
{
    attributes : {
        created_at : 'date',
        updated_at : 'date'
    },

    convert : {
        // a date converter helper
        date : function(raw){
          return new Date(raw)
        }
    },

  init: function() {
    // validating stuff!
    this.validate("name", function() {
      if (this.name == '') {
        return 'Name is required';
      }
    });

    this.validate("description", function() {
      if (this.description == '') {
        return 'Description is required';
      }
    });
  },

  /**
 	 * Retrieves recipes data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped recipe objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/recipes',
			type: 'get',
			dataType: 'json',
			data: params,
			success: this.callback(['wrapMany',success]),
			error: error,
			fixture: "//cookbook/fixtures/recipes.json.get" //calculates the fixture path from the url and type.
		});
	},


//  findOne : function(params, success, error){
//    var self = this,
//    id = params.id;
//    delete params.id;
//    return $.get("/recipes/"+id,
//                  params,
//                  success,
//                  "json thing.model")
//  },

	findOne: "/recipes/{id}",
//        console.log(params)
//		$.ajax({
//			url: '/recipes',
//			type: 'get',
//			dataType: 'json',
//			data: params,
//			success: this.callback(['wrapMany',success]),
//			error: error,
//			fixture: "//cookbook/fixtures/recipes.json.get" //calculates the fixture path from the url and type.
//		});

	/**
	 * Updates a recipe's data.
	 * @param {String} id A unique id representing your recipe.
	 * @param {Object} attrs Data to update your recipe with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/recipes/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a recipe's data.
 	 * @param {String} id A unique id representing your recipe.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/recipes/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a recipe.
	 * @param {Object} attrs A recipe's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/recipes',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{
  // helper functions
//  getCreatedAt: function(){
//    return this.created_at.toDateString()
//  },
//  getUpdatedAt: function(){
//    return this.updated_at.toDateString()
//  }
});