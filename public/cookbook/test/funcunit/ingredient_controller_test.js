/*global module: true, ok: true, equals: true, S: true, test: true */
module("ingredient", {
	setup: function () {
		// open the page
		S.open("//cookbook/cookbook.html");

		//make sure there's at least one ingredient on the page before running a test
		S('.ingredient').exists();
	},
	//a helper function that creates a ingredient
	create: function () {
		S("[name=name]").type("Ice");
		S("[name=description]").type("Cold Water");
		S("[type=submit]").click();
		S('.ingredient:nth-child(2)').exists();
	}
});

test("ingredients present", function () {
	ok(S('.ingredient').size() >= 1, "There is at least one ingredient");
});

test("create ingredients", function () {

	this.create();

	S(function () {
		ok(S('.ingredient:nth-child(2) td:first').text().match(/Ice/), "Typed Ice");
	});
});

test("edit ingredients", function () {

	this.create();

	S('.ingredient:nth-child(2) a.edit').click();
	S(".ingredient input[name=name]").type(" Water");
	S(".ingredient input[name=description]").type("\b\b\b\b\bTap Water");
	S(".update").click();
	S('.ingredient:nth-child(2) .edit').exists(function () {

		ok(S('.ingredient:nth-child(2) td:first').text().match(/Ice Water/), "Typed Ice Water");

		ok(S('.ingredient:nth-child(2) td:nth-child(2)').text().match(/Cold Tap Water/), "Typed Cold Tap Water");
	});
});

test("destroy", function () {

	this.create();

	S(".ingredient:nth-child(2) .destroy").click();

	//makes the next confirmation return true
	S.confirm(true);

	S('.ingredient:nth-child(2)').missing(function () {
		ok("destroyed");
	});

});