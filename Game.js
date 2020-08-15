$(function(){
    console.log('ok?');


    /*---------------  div 사라지고 나옴  --------------------------*/

    $('.box0211').click(function(){
        $('.img01').css({'display':'block'}), $('.wowV').css({'display':'block'}),$('.box05backC02').css({'display':'block'}),
        $('.img02').css({'display':'none'}), $('.img03').css({'display':'none'}), $('.img04').css({'display':'none'}), $('.img05').css({'display':'none'}),
        $('.wowO').css({'display':'none'}),$('.wowS').css({'display':'none'}),$('.wowH').css({'display':'none'}),$('.wowD').css({'display':'none'}),
        $('.box05backC03').css({'display':'none'}); $('.box05backC04').css({'display':'none'}); $('.box05backC05').css({'display':'none'}); $('.box05backC06').css({'display':'none'});
    });
    $('.box0212').click(function(){
        $('.img02').css({'display':'block'}), $('.wowO').css({'display':'block'}),$('.box05backC03').css({'display':'block'}),
        $('.img01').css({'display':'none'}), $('.img03').css({'display':'none'}), $('.img04').css({'display':'none'}), $('.img05').css({'display':'none'}),
        $('.wowV').css({'display':'none'}),$('.wowS').css({'display':'none'}),$('.wowH').css({'display':'none'}),$('.wowD').css({'display':'none'}),
        $('.box05backC02').css({'display':'none'}); $('.box05backC04').css({'display':'none'}); $('.box05backC05').css({'display':'none'}); $('.box05backC06').css({'display':'none'});
    });
    $('.box0213').click(function(){
        $('.img03').css({'display':'block'}),$('.wowS').css({'display':'block'}),$('.box05backC04').css({'display':'block'}),
        $('.img01').css({'display':'none'}),$('.img02').css({'display':'none'}),$('.img04').css({'display':'none'}),$('.img05').css({'display':'none'}),
        $('.wowV').css({'display':'none'}),$('.wowO').css({'display':'none'}),$('.wowH').css({'display':'none'}),$('.wowD').css({'display':'none'}),
        $('.box05backC02').css({'display':'none'});$('.box05backC03').css({'display':'none'});$('.box05backC05').css({'display':'none'});$('.box05backC06').css({'display':'none'});
    });
    $('.box0214').click(function(){
        $('.img04').css({'display':'block'}),$('.wowH').css({'display':'block'}),$('.box05backC05').css({'display':'block'}),
        $('.img01').css({'display':'none'}),$('.img02').css({'display':'none'}),$('.img03').css({'display':'none'}),$('.img05').css({'display':'none'}),
        $('.wowV').css({'display':'none'}),$('.wowO').css({'display':'none'}),$('.wowS').css({'display':'none'}),$('.wowD').css({'display':'none'}),
        $('.box05backC02').css({'display':'none'});$('.box05backC03').css({'display':'none'});$('.box05backC04').css({'display':'none'});$('.box05backC06').css({'display':'none'});
    });
    $('.box0215').click(function(){
        $('.img05').css({'display':'block'}),$('.wowD').css({'display':'block'}),$('.box05backC06').css({'display':'block'}),
        $('.img01').css({'display':'none'}),$('.img02').css({'display':'none'}),$('.img03').css({'display':'none'}),$('.img04').css({'display':'none'}),
        $('.wowV').css({'display':'none'}),$('.wowO').css({'display':'none'}),$('.wowS').css({'display':'none'}),$('.wowH').css({'display':'none'}),
        $('.box05backC02').css({'display':'none'});$('.box05backC03').css({'display':'none'});$('.box05backC04').css({'display':'none'});$('.box05backC05').css({'display':'none'});
    });


     /*---------------  ul 클릭 시 하얀 박스 고정 / 사라지게 만들기 --------------------------*/

    $('.box0211').click(function(){$('.box21').css({'display':'block','position':'absolute'});});
    $('.box0212').click(function(){$('.box22').css({'display':'block','position':'absolute','top':'20%'});});
    $('.box0213').click(function(){$('.box23').css({'display':'block','position':'absolute','top':'40%'});});
    $('.box0214').click(function(){$('.box24').css({'display':'block','position':'absolute','top':'60%'});});
    $('.box0215').click(function(){$('.box25').css({'display':'block','position':'absolute','top':'80%'});});

    $('.box0211').click(function(){$('.box22').css({'display':'none'});$('.box23').css({'display':'none'});$('.box24').css({'display':'none'});$('.box25').css({'display':'none'});});
    $('.box0212').click(function(){$('.box21').css({'display':'none'});$('.box23').css({'display':'none'});$('.box24').css({'display':'none'});$('.box25').css({'display':'none'});});
    $('.box0213').click(function(){$('.box22').css({'display':'none'});$('.box21').css({'display':'none'});$('.box24').css({'display':'none'});$('.box25').css({'display':'none'});});
    $('.box0214').click(function(){$('.box22').css({'display':'none'});$('.box23').css({'display':'none'});$('.box21').css({'display':'none'});$('.box25').css({'display':'none'});});
    $('.box0215').click(function(){$('.box22').css({'display':'none'});$('.box23').css({'display':'none'});$('.box24').css({'display':'none'});$('.box21').css({'display':'none'});});


});