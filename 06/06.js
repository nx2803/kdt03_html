document.addEventListener('DOMContentLoaded',() =>{
    //노드 가져오기
    //주사위 이미지 가져오기
    const img = document.querySelector('#diceDiv > img')
    const button = document.querySelector('#btDiv > input')
    
    //버튼이 클릭되면
    button.addEventListener('click', () => {
        let n = Math.floor(Math.random() * 6) + 1; //1~6
        img.setAttribute('src', `../img/${n}.png`)
        img.setAttribute('alt', `${n}`)
    });

});
