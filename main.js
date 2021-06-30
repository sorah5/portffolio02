

/*타이핑 효과*/
$(document).ready(function() {
    var text = document.getElementById("title");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter.typeString("Hello, I'm Sorah In")
        .pauseFor(2500)
        .start();

}); 

/*윈도우 스크롤 작동시 이벤트 발생*/
$(window).scroll(function(){
    var sct = $(this).scrollTop();

    $('.right>p').each(function(){
        var post = $(this).offset().top - 620;
        if(sct >= post){
            $(this).addClass('animate__lightSpeedInRight');
        }else{
            $(this).removeClass('animate__lightSpeedInRight');
        }
    });
});

$(window).scroll(function(){
    var sct02 = $(this).scrollTop();

    $('.school>.scl').each(function(){
        var post02 = $(this).offset().top - 710;
        if(sct02 >= post02){
            $(this).addClass('animate__fadeInUp');
        }else{
            $(this).removeClass('animate__fadeInUp');
        }
    });
});



