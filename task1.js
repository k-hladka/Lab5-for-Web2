let container = document.getElementById('container');
container.addEventListener('click', function (event){
    let target = event.target;
    if(target.tagName === 'DIV' && target.getAttribute('id')!=='container')
        target.classList.toggle('newColor');
});