document.addEventListener('DOMContentLoaded', ()=>{
    //노드 가져오기
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');
    
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const txt1lb=document.querySelector('[for=txt1]');
    const txt2lb=document.querySelector('[for=txt2]');

    //공통함수
    const updateUI = () => {
        txt1.value ='';
        txt1lb.textContent = sel1.value;

        txt2.value ='';
        txt2lb.textContent = sel2.value;
    }

    //select 변경시
    sel1.addEventListener('change', ()=>{
        sel2.value = sel1.value == 'ºC' ? 'ºF' : 'ºC';
        updateUI();
    } );

      sel2.addEventListener('change', ()=>{
        sel1.value = sel2.value == 'ºC' ? 'ºF' : 'ºC';
        updateUI();
    } );  

    //input txt1의 값이 입력되면.
    txt1.addEventListener('input', ()=>{
     
        let temp;
        temp = sel1.value == 'ºC' ? parseFloat(txt1.value)*1.8+32 : (parseFloat(txt1.value)-32)/1.8;
        txt2.value=parseFloat(temp.toFixed(4));
    })
});
