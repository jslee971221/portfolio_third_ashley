$(function(){
    var c2i = 0;
    var c2txt = $('.cnt02 .artGroup .texts');
    var c2Thumb = $('.cnt02 .artGroup .artThumb');
    var c2Img = $('.cnt02 .artGroup .image');
    var c2btn = $('.cnt02 .artGroup .btn div');
    var pBtn = $('.cnt01 .paging li');
    var c1Img = $('.cnt01 .section .image');
    var c1Article = $('.cnt01 .artRight .image')
    var c1ArtView = $('.cnt01 .artLeft .image')
    var c1ArtViewImg = c1ArtView.css('backgroundImage');
    var imgs = [];
    var txt = [];
    var changeImg = function(imgs, txts, thumbImg, thumbTxt, ci){
        for(i = 0; i < 7; i++){
            imgs[i] = thumbImg.eq(i).css('backgroundImage'); 
            txts[i] = thumbTxt.eq(i).html();
        }
        for(var i = 0; i < 7; i++){
            if(ci > 6){
                ci = 0;
            }
            thumbImg.eq(i).css('backgroundImage', imgs[ci]);
            thumbTxt.eq(i).html(txts[ci]);
            ci++;
        }     
    }
    
    c1Img.click(function(){
        var ind = $(this).index() + 1;
        var c1Imgs = [];
        for(i = 0; i < 4; i++){
            c1Imgs[i] = c1Img.eq(i).css('backgroundImage'); 
        }
        c1ArtView.css('backgroundImage', c1Imgs[ind]);
        for(i = 0; i < 3; i++){
            ind++;
            if(ind > 3){
                ind = 0;
            }
            c1Article.eq(i).css('backgroundImage', c1Imgs[ind]);
        }
    });
    pBtn.click(function(){
        var i = $(this).index();
        if(i == 0){
            c1ArtView.css('backgroundImage', c1ArtViewImg);
        }else{
            c1ArtView.css('backgroundImage', c1Article.eq(i - 1).css('backgroundImage'));
        }
        pBtn.removeClass('show');
        $(this).addClass('show');
    });



    c2Thumb.click(function(){
        c2i = $(this).index();
        for(var i = 0; i <= 6; i++){
            imgs[i] = c2Img.eq(c2i).css('backgroundImage');
            txt[i] = c2txt.eq(c2i).html();
            c2i++;
            if(c2i > 6){
                c2i = 0;
            }
        }
        for(var i = 0; i <= 6; i++){
            c2Img.eq(i).css('backgroundImage', imgs[i]);
            c2txt.eq(i).html(txt[i]);
        }
        c2i = 0;
    });

    c2btn.eq(1).click(function(){
        c2i = 1;
        changeImg(imgs, txt, c2Img, c2txt, c2i);       
    });
    c2btn.eq(0).click(function(){
        c2i=6;
        changeImg(imgs, txt, c2Img, c2txt, c2i);
    });
    
});
