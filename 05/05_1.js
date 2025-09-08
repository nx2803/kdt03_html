//리터럴 표기법
let arr1 = [1, 2, 3];


//Array 생성자 이용
let arr2 = new Array(1, 2, 3);

//배열의 크기
console.log(arr1)
console.log(`arr1 : ${arr1}`)
console.log(`arr1의 요소개수 : ${arr1.length}`)

//배열요소 제거
console.log(arr2)
// arr2.length = 0;
arr2 = [];
console.log(arr2)

// 배열요소 추가
console.log(arr1)
arr1.push('가')
console.log(arr1)
let arr1Pop = arr1.pop();
console.log(arr1)
console.log(arr1Pop)

//배열 순회
//1
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}
//2 key(index)값 가져오기
for (let i in arr1) {
    console.log(arr1[i])
}

//3 value 값 가져오기
for (let item of arr1) {
    console.log(item)
}
//4 forEach 메소드
arr1.forEach((item, i) => {
    console.log(i, item);
});

//배열 map 예습
const arr3 = arr1.map((item) => {
    return item * 2;
})
console.log(arr3)

//콜백 함수는 파라미터가 1개이면 ()가 생략가능
//return 문만 있으면 {}와 return을 생략 가능

const arr4 = arr1.map(item => item * 2)
console.log(arr4)

//콜백 함수는 파라미터가 2개가 되면 인덱스를 가져옴
const arr5 = arr1.map((item, i) => item * i);
console.log(arr5)

//filter
const arr6 = arr1.filter(item => item % 2 == 0);
console.log(arr6)

//map함수 구현
let arr7 = [];
for (let c of arr1) {
    arr7.push(c * 2);
}
console.log(arr7)
//filter 함수
let arr8 = [];
for (let c of arr1) {
    if (c % 2 == 0) {
        arr8.push(c);
    }
}
console.log(arr8)

//concat 함수
const arr9 = arr7.concat(arr8);
console.log('concat 함수')
console.log(arr9)

//전개연산자
const arr11 = [...arr7, ...arr8]
console.log('전개연산자')
console.log(arr11)

//join 함수
const s = arr9.join('-')
console.log('join함수')
console.log(s)

//slice함수
console.log('slice함수')
console.log(arr9.slice(1,3))

//splice함수
console.log('splice함수')
arr9.splice(2,0,'A')
console.log(arr9)

//sort함수
console.log('sort함수')
arr9.sort()
console.log(arr9)

//talling쉼표
console.log('talling 쉼표')
let arr10 = [1,2,]
console.log(arr10)

// //구조분해
// let [x, y] = arr10;
// console.log('구조분해')
// console.log(`x=${x}, y=${y}`)

