$(function(){
    var c2i = 0;
    var c2txt = $('.cnt02 .artGroup .texts');
    var c2Thumb = $('.cnt02 .artGroup .artThumb');
    var c2Img = $('.cnt02 .artGroup .image');
    var c2btn = $('.cnt02 .artGroup .btn div');
    var imgs = [];
    var txt = [];
    
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

    c2btn.eq(0).click(function(){
        c2i = 0;
        for(i = 0; i < 7; i++){ //현재 이미지 상태 저장
            imgs[i] = c2Img.eq(i).css('backgroundImage');
            txt[i] = c2txt.eq(i).html();
        }
        for(var i = 0; i < 7; i++){
            c2i++;
            if(c2i > 6){
                c2i = 0;
            }
            c2Img.eq(i).css('backgroundImage', imgs[c2i]); //이미지 변경
            c2txt.eq(i).html(txt[c2i]);
        }          
    });
    c2btn.eq(1).click(function(){
        c2i=6;
        if(c2i < 0){
            c2i = 6;
        }
        for(i = 0; i < 7; i++){
            imgs[i] = c2Img.eq(i).css('backgroundImage'); //현재 태저장
            txt[i] = c2txt.eq(i).html();
        }
        for(var i = 0; i < 7; i++){
            if(c2i > 6){
                c2i = 0;
            }
            c2Img.eq(i).css('backgroundImage', imgs[c2i]);
            c2txt.eq(i).html(txt[c2i]);
            c2i++;
        }     
    });
    
});
