$(document).ready(function () {
    var isBig = false;
    setInterval(function () {
        if(isBig){
            $("#container").css("transform","scale(1)");
            isBig = false;
        }else{
            $("#container").css("transform","scale(1.2)");
            isBig = true;
        }
    },300);

    $("#color_R,#color_G,#color_B").on("input",function () {
        const r = $("#color_R").val();
        const g = $("#color_G").val();
        const b = $("#color_B").val();
        const color_border = "rgba("+r+","+g+","+b+","+1+")";
        $(".ball_container div").each(function () {
            $(this).css("border","3px solid "+color_border);
        });

        $("#change_title,#changeColor").css("border-color",color_border);
    });

});