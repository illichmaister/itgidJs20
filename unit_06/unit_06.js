//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
let out01 = document.querySelector('.out-1');
function t1() {
    let out = "";
    for (let i = 0; i <= 2; i++) {
        for (let k = 0; k <= 2; k++) {
            out += '*';
        }
        out += '_';
    }
    out01.innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
let out02 = document.querySelector('.out-2');

function t2() {
    let out = '';
    for (let i = 1; i <= 3; i++) {
        out += i + '<br>';
        for (let k = 0; k <= 2; k++) {
            out += '*_';
        }
        out += '<br>';
    }
    out02.innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
let out03 = document.querySelector('.out-3');

function t3() {
    let out = '';
    for (let i = 0; i <= 3; i++) {
        for (let k = 0; k <= 2; k++) {
            out += ('*_');
        }
        out += '<br>';
    }
    out03.innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
let out04 = document.querySelector('.out-4');

function t4() {
    let out = '';
    for (let i = 1; i < 4; i++) {
        out += i + "_";
        for (let k = 1; k < 6; k++) {
            out += `${k} `;
        }
    }
    out04.innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
let out05 = document.querySelector('.out-5');
function t5() {
    let out = '';
    for (let i = 0; i < 3; i++) {

        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                out += 1;
                // console.log(out);
            }
            else {
                out += 0;
                // console.log(out);
            }
        }
        out += '<br>';
    }
    out05.innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
let out06 = document.querySelector('.out-6');

function t6() {
    let out = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k == 0 || k == 4) {
                out += 1;
            }
            else if (k == 1 || k == 3) {
                out += 0;
            }
            else {
                out += "x";
            }
        }
        out += '<br>';
    }
    out06.innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
let out07 = document.querySelector('.out-7');
function t7() {
    let out = '';
    for (let i = 1; i < 5; i++) {
        for (let k = 0; k < i; k++) {
            out += "*";
            // console.log(out);
        }
        out += '<br>';
    }
    out07.innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
let out08 = document.querySelector('.out-8');

function t8() {
    let out = '';
    for (let i = 1; i < 6; i++) {
        for (let k = 6; k > i; k--) {
            out += "*";
            console.log(out);
        }
        out += '<br>';
    }
    out08.innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
let out09 = document.querySelector('.out-9');

function t9() {
    let out = "";
    for (let i = 1; i < 6; i++) {
        for (let k = 1; k <= i; k++) {
            out += `${k} `;
        }
        out += '<br>';
    }
    out09.innerHTML = out;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
let out10 = document.querySelector('.out-10');

function t10() {
    let out = "";
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            if (i == 0 && k < 10) {
                out += 0;
            }
            out += (i * 10) + k + " ";
        }
        out += '<br>';
    }
    out10.innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;