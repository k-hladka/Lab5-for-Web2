let textarea = document.getElementById('textarea');
let block = document.getElementById('block');
let textareaValue;
let count=0;
textarea.addEventListener('focusout', function (){
    if(count === 0){
        textareaValue = textarea.value.split('\n');
        createTable(textareaValue);
    }
    count=1;
});

function createTable(textareaValue){
    let table = document.createElement('table');
    for(let i=0; i<textareaValue.length; i++){
        let tr = document.createElement('tr');
        let arr = textareaValue[i].split('');
        for(let j=0; j<arr.length; j++){
            let td = document.createElement('td');
            if(arr[j]==='1')
                td.classList.add('forTd');
            tr.append(td);
        }
        table.append(tr);
    }
    block.append(table);
}