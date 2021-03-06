/*global module: true, ok: true, equals: true, S: true, test: true */
module("subject", {
	setup: function () {
		// open the page
		S.open("//intrepica/intrepica.html");

		//make sure there's at least one subject on the page before running a test
		S('.subject').exists();
	},
	//a helper function that creates a subject
	create: function () {
		S("[name=name]").type("Ice");
		S("[name=description]").type("Cold Water");
		S("[type=submit]").click();
		S('.subject:nth-child(2)').exists();
	}
});

test("subjects present", function () {
	ok(S('.subject').size() >= 1, "There is at least one subject");
});

test("create subjects", function () {

	this.create();

	S(function () {
		ok(S('.subject:nth-child(2) td:first').text().match(/Ice/), "Typed Ice");
	});
});

test("edit subjects", function () {

	this.create();

	S('.subject:nth-child(2) a.edit').click();
	S(".subject input[name=name]").type(" Water");
	S(".subject input[name=description]").type("\b\b\b\b\bTap Water");
	S(".update").click();
	S('.subject:nth-child(2) .edit').exists(function () {

		ok(S('.subject:nth-child(2) td:first').text().match(/Ice Water/), "Typed Ice Water");

		ok(S('.subject:nth-child(2) td:nth-child(2)').text().match(/Cold Tap Water/), "Typed Cold Tap Water");
	});
});

test("destroy", function () {

	this.create();

	S(".subject:nth-child(2) .destroy").click();

	//makes the next confirmation return true
	S.confirm(true);

	S('.subject:nth-child(2)').missing(function () {
		ok("destroyed");
	});

});