document.addEventListener('DOMContentLoaded', () => {
    let que = 0;
    const bt = document.querySelector('#bt');
    const inp = document.querySelector('#txt1');
    const img = document.querySelector('img');
    let flag = false;

    bt.addEventListener('click', (e) => {
        e.preventDefault();
        if (!flag) {
            que = Math.floor(Math.random() * 100) + 1;
            console.log(que)
            inp.style.display = 'block';
            bt.textContent = '확인'
            img.setAttribute('src', '../img/what.png')
            flag = true;
        }
       
            if (inp.value < que) {
                img.setAttribute('src', '../img/up.png')
            }
            else if (inp.value > que) {
                img.setAttribute('src', '../img/down.png')
            }
            else {
                img.setAttribute('src', '../img/good.png')
                inp.value = '';
                inp.style.display = 'none';
                bt.textContent = '다시 시작하기'
                flag = false;
            }
        inp.focus();


    })
});
