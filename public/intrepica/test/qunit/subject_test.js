module("Model: Intrepica.Models.Subject")

asyncTest("findAll", function(){
	stop(2000);
	Intrepica.Models.Subject.findAll({}, function(subjects){
		ok(subjects)
        ok(subjects.length)
        ok(subjects[0].name)
        ok(subjects[0].description)
		start()
	});
	
})

asyncTest("create", function(){
	stop(2000);
	new Intrepica.Models.Subject({name: "dry cleaning", description: "take to street corner"}).save(function(subject){
		ok(subject);
        ok(subject.id);
        equals(subject.name,"dry cleaning")
        subject.destroy()
		start();
	})
})
asyncTest("update" , function(){
	stop();
	new Intrepica.Models.Subject({name: "cook dinner", description: "chicken"}).
            save(function(subject){
            	equals(subject.description,"chicken");
        		subject.update({description: "steak"},function(subject){
        			equals(subject.description,"steak");
        			subject.destroy();
        			start()
        		})
            })

});
asyncTest("destroy", function(){
	stop(2000);
	new Intrepica.Models.Subject({name: "mow grass", description: "use riding mower"}).
            destroy(function(subject){
            	ok( true ,"Destroy called" )
            	start();
            })
})