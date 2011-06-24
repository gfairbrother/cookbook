//js intrepica/tree_view/scripts/doc.js

load('steal/rhino/steal.js');
steal.plugins("documentjs").then(function(){
	DocumentJS('intrepica/tree_view/tree_view.html');
});