module("tree_view test", { 
	setup: function(){
		S.open("//intrepica/tree_view/tree_view.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});