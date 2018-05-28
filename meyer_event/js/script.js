function myScrollReveal(){
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.banner .logo', { duration: 1000, mobile: false}, 150);
    sr.reveal('.con1 .ani', { duration: 500, mobile: false});
    sr.reveal('.con2 .ani', { duration: 500, mobile: false});
    sr.reveal('.con3 .ani', { duration: 500, mobile: false});
    sr.reveal('.con4 .ani', { duration: 500, mobile: false});
    sr.reveal('.con5 .ani', { duration: 500, mobile: false});
    sr.reveal('.con6 .ani', { duration: 500, mobile: false});
    sr.reveal('.con7 .ani', { duration: 500, mobile: false});

    sr.reveal('.card1 .ani', { duration: 1000, mobile: false}, 150);
    sr.reveal('.card2 .ani', { duration: 1000, mobile: false}, 150);
}

function scroll_cater1(){
	$('html, body').animate({
        scrollTop: $("#cater1").offset().top
    }, 1000);
    return false;  
}


$(function(){

    // 自動裁圖
    $('.imgLiquidFill').imgLiquid({
        fill: true, 
        horizontalAlign: "center", 
        verticalAlign: "center"
    });

});

