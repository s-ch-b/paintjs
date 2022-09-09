$(document).ready(function(){

    $('h1').click(function(){
        $(this).css('color', 'red')
    });
});

// $(문서객체).이벤트(function({ 내부제어소스  }))

// 2. 문서객체 , 선택과 이벤트

// 문서객체 = 태그 = 선택자
// 제이쿼리 = html = css
// 문서객체 => 태그명, 클래스명
//          태그이름, .클래스이름
// ('h1')  , $('.text')
// 이벤트 : 동작이 발생하는 시점
// => 클릭, 마우스를 올렸을 때, 마우스를 내렸을 때
// .click()    .mouseenter()   .mouseleave()

