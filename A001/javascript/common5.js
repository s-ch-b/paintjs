$(document).ready(function(){
    setInterval(function(){
        $('div').animate({
            left : '+=50px'
        }, 300);
    }, 1000);
});

// setInterval() 매서드
// 시간마다 명령들을 반복하도록 만드는 매소드

// setinteval(콜백함수, 시간);