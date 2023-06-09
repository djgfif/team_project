// 웹페이지 로드 이벤트 등록 
window.addEventListener('load', ()=>{
    const grid = new Isotope('section', {
       // isotope 옵션 지정
        itemSelector: 'article',
        columnWidth: 'article',
        transitionDuration: '0.5s'
    });
    const btns = document.querySelectorAll('main ul li');
    for(let e of btns) {
        e.addEventListener('click', e=>{
           const sort = 
                 e.currentTarget.querySelector('a').getAttribute('sort');
            grid.arrange({
                filter: sort
            });
            for(let item of btns) {
                item.classList.remove('on'); 
            }
            e.currentTarget.classList.add('on'); // 선택한 버튼의 배경색 변경
        });
    }
});


