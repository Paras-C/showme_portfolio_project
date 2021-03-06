// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

document.addEventListener("DOMContentLoaded", function(event) { 

// Makes article image bigger and smaller when moused over	
var $article = $(".article");

$article.mouseover(function (){
 var $this = 	$(this).find(".bg-image");
 $this.stop().animate({"background-size": "+=50px"}, 1500);
 console.log($this)
});

$article.mouseout(function (){
 var $this = 	$(this).find(".bg-image");
 $this.stop().animate({"background-size": "500px"}, 1500);
 console.log($this)
});

});