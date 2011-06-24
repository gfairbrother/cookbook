//steal/js intrepica/tree_view/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('intrepica/tree_view/scripts/build.html',{to: 'intrepica/tree_view'});
});
