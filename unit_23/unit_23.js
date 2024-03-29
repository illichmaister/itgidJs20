
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem(5, 1);
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
const a2 = [7, 6, 5]
function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
    // console.log(typeof);
}

// ваше событие здесь!!!
// document.querySelector('.b-2').onclick = t2;
document.querySelector('.b-2').addEventListener("click", t2);


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let out03 = document.querySelector('.out-3');
    let a = JSON.parse(localStorage.getItem('a2'));

    // console.log(localStorage.getItem('a2'));
    // console.log(a);
    let out = '';
    for (let i = 0; i < a.length; i++) {
        out += `${i} ${a[i]}<br>`;
    }
    out03.innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;



// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
const a4 = { hello: 'world', hi: 'mahai' };
function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));

}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;
// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let out = '';
    let out05 = document.querySelector('.out-5');
    let a = JSON.parse(localStorage.getItem('a4'))
    // console.log(a);
    for (let key in a) {
        out += `${key} ${a[key]}<br>`;
    }
    // console.log(out);
    out05.innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('click', t5);
// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let a07 = [];
function t7() {
    let i07 = document.querySelector('.i-7').value;
    a07.push(i07);
    // console.log(a07);
    localStorage.setItem('a7', JSON.stringify(a07));
    console.log("a07: " + a07);
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let a8 = localStorage.getItem('a7');
    a8 = JSON.parse(a8);
    a8.pop();
    a07 = a8;
    localStorage.setItem('a7', JSON.stringify(a8));
    // console.log("a08: " + a8);
    // console.log("a07: " + a07);
}

// ваше событие здесь!!!
document.querySelector('.b-8').addEventListener('click', t8);


