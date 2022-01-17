//переменная для хранения вводимых значений
let exp = '';

//получение компонента для вывода выражения
let resultDiv = document.getElementsByClassName('window__result')[0];

//вывод числа в окно
function clickNumber(n) {
    console.log(n);
    // resultDiv.innerHTML = n;
    exp += n;
    resultDiv.innerHTML = exp;
    console.log(exp);
}

//очистка окна
function clearWindow() {
    resultDiv.innerHTML = '0';
    exp = '';
}

//получение результата операции
function getResult() {
    let res = eval(exp);
    //console.log(`res = ${res}`);

    resultDiv.innerHTML = res;
    //clearWindow();
    //callback();
    return res;
}

//обновление переменной хранения значений
function returnWindow() {
    exp = '';
    console.log(exp);
}

//смена знака
function changeSign() {
    if (exp === "") return;
    if (exp[0] === "-") exp = exp.slice(1);
    else exp = `-${exp}`;
    resultDiv.innerHTML = exp;
}