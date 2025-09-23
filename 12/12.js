document.addEventListener('DOMContentLoaded', () => {
    //노드 가져오기
    //주사위 이미지 가져오기
    const img1 = document.getElementById('d1')
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const buttons = document.querySelectorAll(".n")
    const restart = document.getElementById('restart')
    const result = document.querySelector('#reDiv > p')
    const ma = document.querySelector('main')


    //버튼이 클릭되면
    // buttons.addEventListener('click', () => {
    //     let n = Math.floor(Math.random() * 6) + 1; //1~6
    //     img1.setAttribute('src', `../img/${n}.png`)
    //     img1.setAttribute('alt', `${n}`)

    // for (const button of buttons) {
    //     button.addEventListener('click', () => {
    //         const pic = button.id;
    //         img1.setAttribute('src', `../img/${pic}.png`);
    //     })
    // }


    let flag = false;
    let n = 0;
    let count = 0;

    restart.addEventListener('click', () => {
        // location.reload(true);
        if (!flag) {
            n = Math.floor(Math.random() * 9) + 1;
            console.log(n);
            count = 0;
            flag = true;
            restart.innerText = "게임 중"
            for (const button of buttons) {
                button.innerText = button.id;
                button.disabled = false;
                button.style.border = 'none';
            }
            ma.style.border = 'none';
            ma.style.backgroundImage = 'url("../img/gaming.png")';
            ma.style.backgroundSize = 'cover';
            ma.style.backgroundPosition = 'center';
            result.innerHTML = ""
            count = 0;


        }
    })


    for (const button of buttons) {

        button.addEventListener('click', () => {
            if (!flag) {
                result.innerHTML = "시작버튼 누르라고"
                return;
            }
            const user = parseInt(button.textContent.slice(0, 1));


            if (user === n) {
                if (count >=8) {
                    for (const butt of buttons) {
                        butt.disabled = true;
                        butt.innerText = "🥳"
                    }


                    console.log(user);
                    ma.style.border = '3px solid rgba(43, 255, 89, 1)'
                    result.style.border = '0px solid rgba(43, 255, 89, 1)'
                    button.style.border = '3px solid rgba(43, 255, 89, 1)'
                    ma.style.backgroundImage = 'url("../img/success.png")';
                    ma.style.backgroundSize = 'cover';
                    ma.style.backgroundPosition = 'center';
                    result.innerHTML = " 성공 "
                    result.style.fontSize = '30px'
                    flag = false;
                    restart.innerText = "다시 시작"
                }
                else {
                    for (const butt of buttons) {
                        butt.innerText = "😱"
                    }
                    button.disabled = true;
                    button.innerText = "🤯"
                    console.log(user);
                    ma.style.border = '3px solid rgba(255, 43, 43, 1)'
                    button.style.border = '3px solid rgba(255, 43, 43, 1)'
                    result.style.border = '0px solid rgba(255, 43, 43, 1)'
                    result.innerHTML = "💥"
                    result.style.fontSize = '30px'
                    ma.style.backgroundImage = 'url("../img/explode.png")';
                    ma.style.backgroundSize = 'cover';
                    ma.style.backgroundPosition = 'center';
                    flag = false;
                    restart.innerText = "다시 시작"
                }



            }
            else {
                button.disabled = true;
                button.innerText = "😂"
                console.log(user);
                count++;
                result.innerHTML = "폭탄 아님 x"+count;
                result.style.fontSize = '30px'

                button.style.border = '3px solid rgba(43, 255, 89, 1)'
            }





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
