
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    document.querySelector('.out-1').textContent = event.key;
    // console.log(event);
    return event.key;
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').textContent = e.keyCode;
    return e.key;
}

document.querySelector('.i-2').onkeyup = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
    let out03 = document.querySelector('.out-3');
    console.log(event.keyCode);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        out03.textContent = true;
    }
    else if (event.keyCode >= 48 && event.keyCode <= 57) {
        out03.textContent = false;
    }
    else if (event.keyCode >= 96 && event.keyCode <= 105) {
        out03.textContent = false;
    }
}

document.querySelector('.i-3').onkeyup = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    let out = document.querySelector('.out-4');
    if (event.key == event.key.toUpperCase()) {
        out.innerHTML += event.key.toLowerCase();
    }
    else {
        out.innerHTML += event.key;
    }
    // out.innerHTML += event.key;
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    let out = document.querySelector('.out-5');
    if (event.key == event.key.toLowerCase()) {
        out.innerHTML += event.key.toUpperCase();
    }
    else {
        out.innerHTML += event.key;
    }
}

document.querySelector('.i-5').onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let out = '';
function t6(event) {

    if (event.keyCode >= 97) {
        out += event.key;
    }

    document.querySelector('.i-6').value = out;
    return false;
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['a', 'b', 'c', 'd', 'e', 'f'];
    let randEl = randomizer(a7.length);
    document.querySelector('.out-7').textContent += a7[randEl];
}
function randomizer(max) {
    let random = Math.floor(Math.random() * max);
    return random;
}

document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    let out08 = document.querySelector('.out-8');
    let symb = '';
    let a8 = { i: 1, o: 0, l: 7 };

    if (a8[event.key] !== undefined) {
        symb = a8[event.key];
    }
    else {
        symb = event.key;
    }

    // if (event.keyCode = 73) {
    //     symb = "1";
    // }
    // else if (event.keyCode = 79) {
    //     symb = "0";
    // }
    // else if (event.keyCode = 76) {
    //     symb = "7";
    // }
    // else {
    //     symb = event.key;
    // }

    out08.textContent += symb;
}

document.querySelector('.i-8').onkeydown = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let counter = 0;
function t9(event) {

    if (event.keyCode == 40) {
        counter++;
    }
    else {
        console.log(event.keyCode);
    }
    document.querySelector('.out-9').textContent = counter;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let block = document.querySelector('.block');
let numWidth = block.offsetWidth;
let numHeight = block.offsetHeight;

// let out10 = document.querySelector('.out-10');
function t10(event) {

    if (event.keyCode == 40 || event.keyCode == 38) {
        block.style.height = numHeight + "px";
        numHeight++;
        // console.log(numHeight);
    }
    else if (event.keyCode == 37 || event.keyCode == 39) {
        block.style.width = numWidth + "px";
        numWidth++;
        // console.log(numWidth);
    }

}

document.querySelector('.i-10').onkeyup = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(event) {
    let key = document.querySelectorAll('.key');

    for (let i = 0; i < key.length; i++) {

        key[i].classList.remove('pushed');
        if (key[i].getAttribute('data') == event.code) {
            key[i].classList.add('pushed');
        }
        // for (let item in key) {
        //     console.log(item);
        // }
    }
    // document.querySelector('.key').style.background = "#fafafa";
    // console.log('test');
}

function t11up(event) {
    let key = document.querySelectorAll('.key');
    for (let i = 0; i < key.length; i++) {
        key[i].classList.remove('pushed');
    }
}

document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t11up;