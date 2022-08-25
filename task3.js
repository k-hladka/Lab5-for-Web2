let div = document.querySelector('div');
let h1 = document.querySelector('h1');
div.addEventListener('mousemove', function (event){
    h1.innerHTML = `x=${event.clientX},y=${event.clientY}`;
});