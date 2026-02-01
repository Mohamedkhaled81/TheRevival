/**
 * - Selectors the second task
 * - Show - Hide 
 * - Serivice -> Sliders
 */
$(document).ready(function() {
    $("#about").click(function() {
        $(".hidden:visible").hide();
        $("#about-container").show();
    });
    $("#gallary").click(function() {
        $(".hidden:visible").hide();
        $("#gallary-container").show();
        var currImgPath = $("#main-img").attr("src");
        var currImg = parseInt(currImgPath.split("/").slice(-1)[0]);
        var newPath = null;
        console.log(currImg);
        $("#left-arrow").click(function() {
            currImg = Math.abs((currImg - 1));
            currImg = (currImg === 0) ? 8 : currImg;
            newPath = "./static/images/" + currImg+".jpg";
            $("#main-img").attr("src", newPath);
            console.log(currImg);
        })
        $("#right-arrow").click(function() {
            currImg = (currImg % 8) + 1;
            newPath = "./static/images/" + currImg+".jpg";
            $("#main-img").attr("src", newPath);
            console.log(currImg);
        })
    });
    $("#services").click(function() {
        $(".hidden:visible").hide();
        $("#service-list").slideToggle();
    });
    $("#complain").click(function() {
        $(".hidden:visible").hide();
        $("#complain-container").show();
    });
    $(":submit").click(function() {
        $(".hidden:visible").hide();
        $("#name-text").text($("#name").val());
        $("#email-text").text($("#email").val());
        $("#phone-text").text($("#phone").val());
        $("#complain-text").text($("textarea").val());
        $("#result-complain").show();
    });
    $("#back").click(function(){
        $(".hidden:visible").hide();
        $("#complain-container").show();
    })

})