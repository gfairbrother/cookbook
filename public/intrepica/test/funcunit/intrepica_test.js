module("intrepica test", { 
	setup: function(){
		S.open("//intrepica/intrepica.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});