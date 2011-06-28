//steal/js inui/column_navigation/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('inui/column_navigation/scripts/build.html',{to: 'inui/column_navigation'});
});
