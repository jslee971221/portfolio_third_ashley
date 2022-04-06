$(function(){
    //선언
    var c1Btn = $('.cnt01 .image .btns i');
    var c1Icon = $('.cnt01 .texts .btns div');
    var c1Li = $('.cnt01 .texts ul.bar li');
    var c1Index = 0;
    var c1Txts = $('.cnt01 .texts .txts .txt');
    var c1ImgGroup = $('.cnt01 .imgGroup');
    var c1Pbtn = $('.cnt01 .paging li');
    var c3Pbtn = $('.cnt03 .paging li');
    var c3Index = 0;
    var wd = $(window).width();
    var infiSlideLeft = function(imgGroup, index, li, txts){
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
            txts.css({width : 0});
            txts.eq(index).css({width : '100%'});
        });
        return index;
    }
    var infiSlideRight = function(imgGroup, index, li,txts){
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
            txts.css({width : 0});
            txts.eq(index).css({width : '100%'});
        });
        return index;
    }

    //시작
    c1ImgGroup.find('.image:last').prependTo(c1ImgGroup);
    c1ImgGroup.css({
        marginLeft : '-100%'
    });
    c1Btn.first().click(function(){
        c1Index = infiSlideLeft(c1ImgGroup, c1Index, c1Li, c1Txts);
    });
    c1Btn.last().click(function(){
        c1Index = infiSlideRight(c1ImgGroup, c1Index, c1Li, c1Txts);
    });

    c1Icon.click(function(){
        var j = c1Index;
        var th = $(this).index();
        j = th - j;
        if(j < 0){
            j += 4;
        }
        for(var i = 0; i < j; i++){
            c1Index = infiSlideRight(c1ImgGroup, c1Index, c1Li, c1Txts);
        }
        c1Pbtn.removeClass('show');
        c1Pbtn.eq(c1Index).addClass('show');
    });

    //모바일
    c1Pbtn.click(function(){
        var j = c1Index;
        var th = $(this).index();
        j = th - j;
        if(j < 0){
            j += 4;
        }
        for(var i = 0; i < j; i++){
            c1Index = infiSlideRight(c1ImgGroup, c1Index, c1Li, c1Txts);
        }
        c1Pbtn.removeClass('show');
        $(this).addClass('show');
    });
    
    if(wd <= 1024){
        $('.cnt03 .article').css({width : 0, overflow : 'hidden'});
        $('.cnt03 .article:first').css({width : '100%'});
    }
    c3Pbtn.click(function(){
        c3Index = $(this).index();
        $('.cnt03 .article').css({width : 0});
        $('.cnt03 .article').eq(c3Index).css({width : '100%'});
        c3Pbtn.removeClass('show');
        $(this).addClass('show');
    });
});