$(document).ready(function(){
    $('.up').click(function(){
        $('p').animate({
            top : '-=20px' // 위로 20px 만큼 이동해라
        }, 200);
    });

    $('.down').click(function(){
        $('p').animate({
            top : '+=20px' // 아래로 20px 만큼 이동해라
        }, 200);
    });

    $('.left').click(function(){
        $('p').animate({
            left : '-=20px' // 왼쪽으로 20px 만큼 이동해라
        }, 200);
    });

    $('.right').click(function(){
        $('p').animate({
            left : '+=20px' // 오른쪽으로 20px 만큼 이동해라
        }, 200);
    });
});
// 애니메이트 매서드
//  문서객체를 움직이게 처리하는 매소드

//  $('문서객체').animate({css속성}, 시간);
//  => css속성 : left, top속성 / 시간 : 1/1000초
