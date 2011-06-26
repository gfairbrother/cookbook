module("nested_set test", { 
	setup: function(){
		S.open("//inui/nested_set/nested_set.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");

//    '<ul><li class="subject intrepica_models_subject_2">Spelling</li><li class="subject intrepica_models_subject_3">Phonics</li><li class="subject intrepica_models_subject_4">Comprehension</li><li class="subject intrepica_models_subject_5">Pre-Reading</li><li class="subject intrepica_models_subject_6">Reading</li><li class="subject intrepica_models_subject_7">Grammar</li><li class="subject intrepica_models_subject_8">Sight Words</li></ul>'

});