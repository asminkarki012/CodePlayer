function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+
$("#csspanel").val()+"</style></head><body>"+$("#htmlpanel").val()+
"</body></html>");
    
document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());


}

    $(".toggleButton").hover(function () { //cursor in

        $(this).addClass("higlight");


    }, function () {   //cursor out
        $(this).removeClass("higlight");

    });
    $(".toggleButton").click(function () {


        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        var panelId = $(this).attr("id") + "panel";
        $("#"+panelId).toggleClass("hidden");
        var numberOfActivePanels=4-$('.hidden').length;
        $(".panel").width(($(window).width()/numberOfActivePanels)-15);  

      });

    $(".panel").height($(window).height() - $("#header").height() - 15);
    $(".panel").width(($(window).width()/2)-15);

      updateOutput();
    
    $("textarea").on('change keyup paste', function () {

        updateOutput();
        

    });
