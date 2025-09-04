// 기존방식
// function hello(n) {
//     if (n=='1') alert("안녕하세요.");
//     else alert('반가워요!');

//     console.log('콘솔출력입니다.');
// }

// 화살표 함수
const hello = (n) => {
    // ==, ===을 비교
    if (n == '1') alert("안녕하세요.");
    else alert('반가워요!');

    console.log('콘솔출력입니다.');
}
const CheckVar = () => {
    //x = 10;
    //var x;
    let x;
    x='test';
    const y = 20;
    //변수는 let, 상수는 const
    // console.log('x = '+ x);
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`);
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)?'예':'아니오'}`);
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y)?'예':'아니오'}`);
}