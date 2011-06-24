//steal/js intrepica/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('intrepica/scripts/build.html',{to: 'intrepica'});
});
