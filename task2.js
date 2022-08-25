let container = document.getElementById('container');
container.addEventListener('focusin', function (event){
    let target = event.target;
    if(target.closest('INPUT') || target.closest('TEXTAREA')){
        target.closest('FIELDSET').classList.toggle('newColor');
    }
});
container.addEventListener('focusout', function (event){
    let target = event.target;
    if(target.closest('INPUT') || target.closest('TEXTAREA')){
        target.closest('FIELDSET').classList.toggle('newColor');
    }
});