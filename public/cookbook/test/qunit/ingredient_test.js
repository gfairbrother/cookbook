module("Model: Cookbook.Models.Ingredient")

test("findAll", function(){
	stop(2000);
	Cookbook.Models.Ingredient.findAll({}, function(ingredients){
		start()
		ok(ingredients)
        ok(ingredients.length)
        ok(ingredients[0].name)
        ok(ingredients[0].description)
	});
	
})

test("create", function(){
	stop(2000);
	new Cookbook.Models.Ingredient({name: "dry cleaning", description: "take to street corner"}).save(function(ingredient){
		start();
		ok(ingredient);
        ok(ingredient.id);
        equals(ingredient.name,"dry cleaning")
        ingredient.destroy()
	})
})
test("update" , function(){
	stop();
	new Cookbook.Models.Ingredient({name: "cook dinner", description: "chicken"}).
            save(function(ingredient){
            	equals(ingredient.description,"chicken");
        		ingredient.update({description: "steak"},function(ingredient){
        			start()
        			equals(ingredient.description,"steak");
        			ingredient.destroy();
        		})
            })

});
test("destroy", function(){
	stop(2000);
	new Cookbook.Models.Ingredient({name: "mow grass", description: "use riding mower"}).
            destroy(function(ingredient){
            	start();
            	ok( true ,"Destroy called" )
            })
})