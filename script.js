const screen = document.querySelector("#screen");
const clear = document.querySelector(".cancel");
const numberBtn = document.querySelectorAll(".btn");
const operatorBtn = document.querySelectorAll(".operator");
const equally = document.querySelector('.equally');
const switOnOff = document.querySelector('.switch');

for (i = 0; i < numberBtn.length; i++) {
    let numberOwn = numberBtn[i];
    numberOwn.addEventListener('click', function (e) {
        numberPress(e.currentTarget.textContent)
    });
};

for (i = 0; i < operatorBtn.length; i++) {
    let operator = operatorBtn[i];
    operator.addEventListener('click', function (e) {
        operatorPress(e.target.textContent);
    })
};

equally.addEventListener('click', equallyFunc);

function numberPress(number) {
    if (screen.innerHTML === '0') {
        screen.innerHTML = number
    } else(
        screen.innerHTML += number
    )
}

function operatorPress(symbol) {
    screen.innerHTML += symbol
};

function equallyFunc() {
    let result = screen.innerHTML;
    if (result) {
        screen.innerHTML = eval(result)
    }
};

clear.onclick = function () {
    screen.innerHTML = '0'
}

switOnOff.addEventListener('click', switOn);

function switOn() {
    screen.classList.toggle('screen')
    if ('screenBlack') {
        screen.innerHTML = ''
    }
}