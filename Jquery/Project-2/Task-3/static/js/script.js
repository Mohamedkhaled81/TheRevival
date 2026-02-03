$(document).ready(function() {
    $("#bunny-container").draggable();
    $("#hole").droppable({
      drop: function() {
        $("#bunny-container").hide(1000);
      }
    })
})