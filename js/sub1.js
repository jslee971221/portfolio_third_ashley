$(function(){
    var thumb = $('.artBtm .article');
    var view = $('.artMid .article')
    var more = $('.section>.btn');
    var i = 0;
    var counter = 1;
    var likec = 1;
    var slideBtns = $('.artMid .btns i');
    var slideI = 0;
    var artGroup = $('.artMid .artGroup');
    
    thumb.click(function(){
        var th = $(this);
        i = th.index();
        if(th.parent().attr('class') == 'artGroup g2'){
            i += 5;
        }
        view.html(th.html());
        view.find('.image').css('backgroundImage', th.find('.image').css('backgroundImage'));
    });

    view.on('click', '.btn', function(){
        if(likec == -1){
            var icon = $(this).find('i');
            if(icon.attr('class') == 'xi-heart-o'){
                likec = 1;
            }
        }

        if(likec == 1){
            view.find('i').removeClass('xi-heart-o');
            view.find('i').addClass('xi-heart');
            var count = Number($('.texts span').eq(0).text());
            $('.texts span').eq(0).text(count + 1);
        }else{
            view.find('i').removeClass('xi-heart');
            view.find('i').addClass('xi-heart-o');
            var count = Number($('.texts span').eq(0).text());
            $('.texts span').eq(0).text(count - 1);
        }
        likec *= -1;
        thumb.eq(i).find('.texts').html(view.find('.texts').html());
        thumb.eq(i).find('.image .btn').html(view.find('.image .btn').html());
    });

    more.click(function(){
        if(counter == 1){
            $('.artBtm').append($('.artBtm').html());
            $(this).text('Close -');
        }else{
            $('.artBtm .artGroup:eq(1)~').remove();
            $(this).text('View More +');
        }
        counter *= -1;
    });

    
    slideBtns.first().click(function(){
        slideI++;
        artGroup.css('marginLeft', -100 * slideI + '%');
    });


});