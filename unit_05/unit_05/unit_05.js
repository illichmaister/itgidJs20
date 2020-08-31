//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
let out01 = document.querySelector('.out-1');
let res01 = '';
function t1() {
    for (let i = 1; i <= 50; i++) {
        res01 += i + " ";
        console.log(res01);
    }
    out01.innerHTML = res01;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
let out02 = document.querySelector('.out-2');

function t2() {
    let res02 = '';
    for (let i = 2; i < 123; i = i + 2) {

        res02 += i + " ";
        console.log(res02);

    }
    out02.innerHTML = res02;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
let out03 = document.querySelector('.out-3');

function t3() {
    let res03 = '';
    for (let i = 25; i >= 7; i--) {
        res03 += i + ' ';
    }
    out03.innerHTML = res03;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
let out04 = document.querySelector('.out-4');

function t4() {
    let res04 = '';
    for (let i = 77; i >= 35; i = i - 3) {
        res04 += i + '_';
    }
    out04.innerHTML = res04;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
let out05 = document.querySelector('.out-5');

function t5() {
    let res05 = '';
    let separator = '';
    for (let i = 1; i <= 17; i++) {
        if (i % 2 === 0) {
            separator = "_**";
        }
        else {
            separator = "_*";
        }
        res05 += i + separator;
    }

    out05.innerHTML = res05;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//
let out06 = document.querySelector('.out-6');


function t6() {
    let input06 = document.querySelector('.i-6').value;
    let res06 = '';
    for (let i = 0; i < input06; i++) {
        res06 += "******" + "<br>";
    }
    out06.innerHTML = res06;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.
let out07 = document.querySelector('.out-7');
function t7() {
    let input07 = document.querySelector('.i-7').value;
    let res07 = '';
    for (let i = input07; i >= 0; i--) {
        res07 += i + " ";
    }
    out07.innerHTML = res07;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.
let out08 = document.querySelector('.out-8');
function t8() {
    let input081 = document.querySelector('.i-81').value;
    let input082 = document.querySelector('.i-82').value;
    let res08 = '';
    for (let i = input081; i <= input082; i++) {
        res08 += i + ' ';
    }
    out08.innerHTML = res08;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
let out09 = document.querySelector('.out-9');
function t9() {
    let input091 = document.querySelector('.i-91').value;
    let input092 = document.querySelector('.i-92').value;
    let res09 = '';

    if (input091 > input092) {
        let change = input091;
        input091 = input092;
        input092 = change;
    }
    for (let i = input091; i <= input092; i++) {
        res09 += i + " ";
    }
    out09.innerHTML = res09;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let out10 = document.querySelector('.out-10');
function t10() {
    let res10 = '';
    for (let i = 1950; i <= 2000; i = i + 2) {
        res10 += i + " ";
    }
    out10.innerHTML = res10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let out11 = document.querySelector('.out-11');
function t11() {
    let div11 = document.querySelectorAll('.div-11');
    let res11 = '';
    // console.log(div11);
    for (let i = 0; i < div11.length; i++) {
        res11 += div11[i].innerHTML + ' ';
    }
    out11.innerHTML = res11;
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
    let div12 = document.querySelectorAll('.div-12');
    for (let i = 0; i < div12.length; i++) {
        div12[i].style.background = 'orange';
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let i13 = document.querySelectorAll('.i-13');

function t13() {
    for (let i = 0; i < i13.length; i++) {
        i13[i].value += i + 1;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let i14 = document.querySelectorAll('.i-14');
let out14 = document.querySelector('.out-14');


function t14() {
    let res14 = '';
    console.log(i14.length);
    for (let i = 0; i < i14.length; i++) {
        if (i14[i].checked) {
            res14 = i14[i].value;
        }
    }
    out14.innerHTML = res14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i
let out15 = document.querySelector('.out-15');

function t15() {
    let res15 = '';
    for (let i = 0; i <= 10; i++) {
        res15 += (10 - i) + ' ' + i + ' ';
    }
    out15.innerHTML = res15;
}

document.querySelector('.b-15').onclick = t15;
