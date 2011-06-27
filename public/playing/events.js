steal.plugins("jquery/controller",'jquery/event/default').then(function($){
$.Controller.extend("Tabs",{
	init : function(){
		this.find("li:first").addClass('active')
		this.find(".tab:gt(0)").hide();
	},
	"li click" : function(el, ev){
		ev.preventDefault();
		if(!el.hasClass('active') && this.sub(el).triggerDefaults("show")){
			this.sub(this.find(".active").removeClass("active")).hide();
			el.addClass("active")
		}
	},
	sub : function(el){
		return $(el.find("a").attr("href"))
	},
	".tab default.show" : function(el){
		el.show();
	}
})

$("#tabs").tabs();
$("#second").bind("show",function(ev){
	if(! $("#complete")[0].checked ){
		ev.preventDefault();
	}
})

}).start();