module("column_navigation test", { 
	setup: function(){
		S.open("//inui/column_navigation/column_navigation.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});