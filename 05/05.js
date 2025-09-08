//로또 번호 생성
const Lotto = () => {
    //0.숫자 저장 배열
    let nums = [];

    //1. 숫자 7개 노중복 생성
    while (nums.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1;
        if (nums.includes(n))
            continue;

        nums.push(n)
    }
    //console.log(nums)
    //보너스 배열
    const bonus = nums.pop();
    nums.sort((a, b) => a - b);
    // console.log(nums)
    // console.log(bonus)
    //2. 태그생성
    let tags = [] ;
    for(let item of nums){
        tags.push(`<span class="sp${Math.floor(item/10)}">${item}</span>`)
    }
    //+도 생성
    tags.push(`<span class="sp+">+</span>`)
    tags.push(`<span class="sp${Math.floor(bonus/10)}">${bonus}</span>`)
    // console.log(tags)

    //3. 화면에 보이도록
    document.getElementById('spDiv').innerHTML = tags.join('');

}