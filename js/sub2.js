$(function(){
    //선언
    var c1Btn = $('.cnt01 .image .btns i');
    var c1Icon = $('.cnt01 .texts .btns div');
    var c1Li = $('.cnt01 .texts ul.bar li');
    var c1Index = 0;
    var c1Txts = $('.cnt01 .texts .txts');
    var c1ImgGroup = $('.cnt01 .imgGroup');
    var infiSlideLeft = function(imgGroup, index, li){
        index--;
        if(index < 0){
            index = 3;
        }
        imgGroup.animate({
            marginLeft : 0
        }, 500, function(){
            imgGroup.find('.image:last').prependTo(imgGroup);
            imgGroup.css({
                marginLeft : '-100%'
            });
            li.removeClass('show');
            li.eq(index).addClass('show');
        });
        return index;
    }
    var infiSlideRight = function(imgGroup, index, li){
        index++;
        if(index > 3){
            index = 0;
        }
        imgGroup.animate({
            marginLeft : '-200%'
        }, 500, function(){
            imgGroup.find('.image:first').appendTo(imgGroup);
            imgGroup.css({
                marginLeft : '-100%'
            });
            li.removeClass('show');
            li.eq(index).addClass('show');
        });
        return index;
    }

    //시작
    c1ImgGroup.find('.image:last').prependTo(c1ImgGroup);
    c1ImgGroup.css({
        marginLeft : '-100%'
    });
    c1Btn.first().click(function(){
        c1Index = infiSlideLeft(c1ImgGroup, c1Index, c1Li);
        c1Txts.find('.txt:last').fadeOut(500, function(){
            $(this).prependTo(c1Txts);
            $(this).fadeIn(0);
        });
    });
    c1Btn.last().click(function(){
        c1Index = infiSlideRight(c1ImgGroup, c1Index, c1Li);
        c1Txts.find('.txt:first').fadeOut(0, function(){
            $(this).appendTo(c1Txts);
            $(this).fadeIn(500);
        });
    });

    c1Icon.click(function(){
        var j = c1Index;
        var th = $(this).index();
        j = th - j;
        if(j < 0){
            j += 4;
        }
        for(var i = 0; i < j; i++){
            c1Index = infiSlideRight(c1ImgGroup, c1Index, c1Li);
            c1Txts.find('.txt:first').fadeOut(0, function(){
                $(this).appendTo(c1Txts);
                $(this).fadeIn(500);
            });
        }
    });

});