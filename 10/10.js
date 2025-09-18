document.addEventListener('DOMContentLoaded', () => {
    //노드 가져오기
    //주사위 이미지 가져오기
    const img1 = document.getElementById('d1')
    const buttons = document.querySelectorAll('#btDiv > img')
    const result = document.querySelector('#reDiv > p')
    const ma = document.querySelector('main')

    //버튼이 클릭되면
    // buttons.addEventListener('click', () => {
    //     let n = Math.floor(Math.random() * 6) + 1; //1~6
    //     img1.setAttribute('src', `../img/${n}.png`)
    //     img1.setAttribute('alt', `${n}`)

    for (const button of buttons) {
        button.addEventListener('click', () => {
            const pic = button.id;
            img1.setAttribute('src', `../img/${pic}.png`);


        })
    }


    // });

    // for (let b of button) {
    //     b.addEventListener('click', () => {
    //         const user = parseInt(b.textContent.slice(0, 1));
    //         let n = Math.floor(Math.random() * 6) + 1; //1~6

    //         img1.setAttribute('src', `../img/${n}.png`)
    //         img1.setAttribute('alt', `${n}`)

    //         img2.setAttribute('src', `../img/${user}.png`)
    //         img2.setAttribute('alt', `${user}`)

    //         if (n === user) {
    //             result.innerHTML = "✔";
    //             ma.style.border = '3px solid rgba(43, 255, 89, 1)'
    //             result.style.border = '1px solid rgba(43, 255, 89, 1)'
    //         }
    //         else {
    //             result.innerHTML = "✖"
    //             ma.style.border = '3px solid rgba(255, 43, 43, 1)'
    //             result.style.border = '1px solid rgba(255, 43, 43, 1)'
    //         }
    //     })
    // }


});
