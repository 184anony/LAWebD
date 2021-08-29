$(function(){
    $(window).scroll(function (){
        $("#shop").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $("#photo").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $("#price").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $("#access").each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        });
    });
});