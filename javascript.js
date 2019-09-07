$(document).ready(function() {
    if($(document).width() < 600) {
        $(".timeline").css({"margin": "none","padding-left": "20px"});
        $(".timeline article div.inner").css({"float": "left","width": "70%"});
        $(".timeline article div.inner span.date").css({"right": "0px","float": "right", "width": "30px", "height": "35px"});
        $(".timeline article div.inner span.date span.month").css({"font-size": "12px"});
        $(".timeline article div.inner span.date span.year").css({"font-size": "12px"});
        $(".timelineline").css({"float": "right","right": "15px"});
        $(".timeline article div.inner p").css({"font-size": "3vw"});
        $("h6").css({"font-size": "3vw"});
        $(".timeline article div.inner h2").css({"font-size": "3vw"});
         };


})
