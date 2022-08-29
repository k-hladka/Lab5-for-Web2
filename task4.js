let buttonRight = document.getElementById('buttonRight');
let buttonLeft = document.getElementById('buttonLeft');
let divChild = document.getElementById('child1');
let divChild2 = document.getElementById('child2');
let divsForInput = document.querySelectorAll('.divForInput');

divChild.onclick =function (event){
    markedInputTag(event);
}

let markedElem;
let arrLeftBlock;

buttonRight.addEventListener('click', function (event){
   markedElem = document.querySelectorAll('[class *= "marked"]');
   markedTagForOneDivBlock();
   arrLeftBlock = document.querySelectorAll('.elemForOneBlock');
    event.preventDefault();
    for(let i of markedElem)
        divChild2.append(i);
});

divChild2.onclick = function (event){
    markedInputTag(event);
}


buttonLeft.addEventListener('click', function (event){
    markedElem = document.querySelectorAll('[class *= "marked"]');
    event.preventDefault();
    for(let i = 0; i < markedElem.length; i++){
        for(let j = 0; j < arrLeftBlock.length; j++){
            if(markedElem[i].textContent < arrLeftBlock[j].textContent && j===0 ||
                (j - 1 >=0 &&
               markedElem[i].textContent > arrLeftBlock[j-1].textContent))
                arrLeftBlock[j].before(markedElem[i]);
            if(markedElem[i].textContent > arrLeftBlock[j].textContent)
                arrLeftBlock[j].after(markedElem[i]);
        }
    }
});


function markedInputTag(event){
    let target = event.target;
    if(target.tagName === 'INPUT')
        target.closest('.divForInput').classList.toggle('marked');
}

function markedTagForOneDivBlock(){
    for(let i=0; i<divsForInput.length; i++)
        if(!divsForInput[i].closest('.marked'))
            divsForInput[i].classList.toggle('elemForOneBlock');
}