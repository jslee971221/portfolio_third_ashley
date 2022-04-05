$(function(){
    var bgGroup = $('.bgGroup');
    var imgGroup = $('.bnr02 .imgGroup');
    var wd = $(window).width();
    var mv = 0;
    function autoSlide(){
        bgGroup.animate({
            marginLeft : '-200%'
        }, 800, function(){
            bgGroup.find('.bgImg:first').appendTo(bgGroup);
            bgGroup.css({marginLeft : '-100%'});
            }
        );
    }
    function autoSlide2(j){
        imgGroup.animate({
            marginLeft : 2 * j + '%'
        }, 800, function(){
            imgGroup.find('.image:first').appendTo(imgGroup);
            imgGroup.css({marginLeft : j + '%'});
            }
        );
    }
    if(wd > 1024){
        mv = -20; 
    }else if(wd > 420 && wd <= 1024){
        mv = -33.33;
    }else{
        mv = 0;
    }
    bgGroup.css({marginLeft : '-100%'});
    bgGroup.find('.bgImg:last').prependTo(bgGroup);
    imgGroup.css({marginLeft : mv + '%'});
    imgGroup.find('.image:last').prependTo(imgGroup);
    setInterval(autoSlide, 3000);
    setInterval(function(){
        autoSlide2(mv);
    }, 3000);
});