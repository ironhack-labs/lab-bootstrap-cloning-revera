$(function() {
    console.log("entro a mi js");
    $(".navbar-nav a").hover(function(){
        console.log("entro sobre");
        $(".navbar-nav").find(".sobre").removeClass("sobre");
        $(".navbar a").removeClass("sobre");
        $(this).addClass("sobre");
    });

});