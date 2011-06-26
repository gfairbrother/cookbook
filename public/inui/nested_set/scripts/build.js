//steal/js inui/nested_set/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('inui/nested_set/scripts/build.html',{to: 'inui/nested_set'});
});
