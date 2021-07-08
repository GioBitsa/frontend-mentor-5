const main = document.querySelector('.main');

// change theme

const changeTheme = document.querySelector('.choose-theme');

const span = document.querySelector('.slider');

changeTheme.addEventListener('click', () => {
    if(main.classList.contains('theme1')){
        main.classList.remove('theme1');
        main.classList.add('theme2');

        span.classList.remove('slide1');
        span.classList.add('slide2');

    }else if(main.classList.contains('theme2')){
        main.classList.remove('theme2');
        main.classList.add('theme3');
        
        span.classList.remove('slide2');
        span.classList.add('slide3');
        
    }else if(main.classList.contains('theme3')){
        main.classList.remove('theme3');
        main.classList.add('theme1');
        
        span.classList.remove('slide3');
        span.classList.add('slide1');
        
    }
})

// end of change theme

// dial

const item = document.querySelectorAll('.grid-item');

const screenText = document.querySelector('.text');
const resetBtn = document.getElementById('reset');
const resultBtn = document.getElementById('result');
const deleteBtn = document.getElementById('deleteBtn');
const operatorBtn = document.querySelectorAll('.operator');

var variables = ['', ''];
var operation = '';
var id = 0;

function reset(){
    variables = ['', ''];
    operation = '';
    id = 0;
    updateScreen();
}

function updateScreen(){
    if(variables[id] === ""){
        screenText.innerText = '0';
    }else{
        screenText.innerText = variables[id];
    }
}

function del(){
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}

function calculate(){
    var res = eval(variables[0] + operation + variables[1]);
    operation = '';
    variables[1] = '';
    variables[0] = res;
    id = 0;
    updateScreen();
    variables[0] = '';
}

item.forEach(key => {
    key.addEventListener('click', () => {

        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

        if (regexp.test(variables[id]+key.innerText)){
            variables[id] += key.innerText;
            updateScreen();
        }
    })
})

resultBtn.addEventListener('click', calculate)

resetBtn.addEventListener('click', reset);

deleteBtn.addEventListener('click', del);

operatorBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        if (variables[0] === '' && screenText.innerText !== '0'){
            variables[0] = screenText.innerText;
        }

        id++;
        switch(btn.innerText){
            case '+':
            case '-':
            case '/':
                operation = btn.innerText;
                break;
            case 'x':
                operation = '*';
        }
    })
})

// end of dial