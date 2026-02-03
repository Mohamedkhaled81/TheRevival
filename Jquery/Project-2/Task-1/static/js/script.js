$(document).ready(function() {
    $("#run").click(function() {
        $("#hello").animate({marginLeft: '250px'})
        .animate({backgroundColor: 'blue'})
        .animate({width: '500px'})
        .animate({padding: '50px'})
        .animate({fontSize: '40px'});

        $("#bunny").animate({top: '250px'})
        .animate({left: '150px'})
        .animate({rotate: '50deg'})
        .animate({scale: 2})
    });
    $("#return").click(function(){
        $("#hello").animate({fontSize: '20px'})
        .animate({padding: '5px'})
        .animate({width: '100px'})
        .animate({backgroundColor: 'red'})
        .animate({marginLeft: '0'});

        $("#bunny")
        .animate({scale: 1})
        .animate({left: '5px'})
        .animate({rotate: '0deg'})
        .animate({top: '60px'})
    });
})