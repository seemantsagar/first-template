$(document).ready(function(){
	$('ul.tabs').tabs();
	 $(".button-collapse").sideNav();
	 		$("#q").click(function(){
				$("#t").toggle();
				$("#e").hide();
				$("#y").hide();
				$("#i").hide();
			});
			$("#w").click(function(){
				$("#e").toggle();
				$("#t").hide();
				$("#y").hide();
				$("#i").hide();
			});
			$("#r").click(function(){
				$("#y").toggle();
				$("#e").hide();
				$("#t").hide();
				$("#i").hide();
			});
			$("#u").click(function(){
				$("#i").toggle();
				$("#e").hide();
				$("#t").hide();
				$("#y").hide();
			});
});

