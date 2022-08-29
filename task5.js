let width = document.getElementById('width');
let widthResult = document.getElementById('resultWidth');

let height = document.getElementById('height');
let heightResult = document.getElementById('resultHeight');

let rotate = document. getElementById('rotate');
let rotateResult = document.getElementById('resultRotate');

let block = document.getElementById('block');

width.addEventListener('mousemove', function (){
    widthResult.classList.add('forOutput');
    widthResult.value = width.value;
    block.style.width = +widthResult.value + 'px';
});
height.addEventListener('mousemove', function (){
    heightResult.classList.add('forOutput');
    heightResult.value = height.value;
    block.style.height = +heightResult.value + 'px';
});
rotate.addEventListener('mousemove', function (){
    rotateResult.classList.add('forOutput');
    rotateResult.value = rotate.value;
    block.style.transform = 'rotate('+ +rotateResult.value + 'deg)';
});
