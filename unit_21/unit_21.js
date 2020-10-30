
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML = 'touch';
}

document.querySelector('.div-1').addEventListener('touchstart', t1);
// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count02 = 0;
function t2(event) {
    document.querySelector('.out-2').innerHTML = count02 + event.touches.length;
    count02++;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    let out03 = document.querySelector('.out-3');
    console.log(event);
    if (event.target.classList.contains('div-3_1')) {
        out03.innerHTML = '1';
    }
    else if (event.target.classList.contains('div-3_2')) {
        out03.innerHTML = '2';
    }
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', t4_1);
    // console.log('f');
}
function t4_1() {
    document.querySelector('.out-4').innerHTML = "touch";
}

document.querySelector('.btn-4').addEventListener('touchstart', t4);


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', t4_1)
}

document.querySelector('.b-5').addEventListener('touchstart', t5);

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent = 'touchend';
    // console.log('w');
}
document.querySelector('.div-4').addEventListener("touchend", t6);

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.background = 'red';
    // console.log('g');
}

document.querySelector('.div-7').addEventListener("touchstart", t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']
function t8() {
    document.querySelector('.div-8').style.background = a8[Math.floor(Math.random() * a8.length)];

}

document.querySelector('.div-8').addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    // console.log(event);
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

document.querySelector('.div-9').addEventListener('touchstart', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10() {
    let num = document.querySelector('.div-10').offsetWidth;
    num++;
    document.querySelector('.div-10').style.width = num + 'px';

}

document.querySelector('.div-10').addEventListener('touchmove', t10);
// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    let out11 = document.querySelector('.out-11');
    var touch = event.changedTouches.item(0);
    out11.innerHTML = `radiusX: ${touch.radiusX} radiusY: ${touch.radiusY}`;
}

document.querySelector('.div-11').ontouchstart = t11;

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
let maxImage = document.querySelector('.img-12-max');

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resFunction;

function nextFunction() {
    // console.log(images);
    // for (let i = 0; i < images.length; i++) {
    //     console.log(images[i]);}

    if (count + 1 >= images.length) {
        count = 0;
        images[count].classList.add("active-img");
        images[images.length - 1].classList.remove("active-img");
        maxImage.setAttribute("src", `img/${count + 1}.png`)
    }
    else {
        console.log(count);
        count++;
        images[count].classList.add("active-img");
        images[count - 1].classList.remove("active-img");
        console.log(count);
        maxImage.setAttribute("src", `img/${count + 1}.png`)
    }
}

function prevFunction() {
    if (count - 1 < 0) {
        count = images.length - 1;
        images[count].classList.add("active-img");
        images[0].classList.remove("active-img");
        maxImage.setAttribute("src", `img/${count + 1}.png`)
    }
    else {
        count--;
        images[count].classList.add("active-img");
        images[count + 1].classList.remove("active-img");
        maxImage.setAttribute("src", `img/${count + 1}.png`)
    }
}

function resFunction() {
    count = 0;
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("active-img");
    }
    images[count].classList.add("active-img");
    document.querySelector(".active-img").src = images[count].src;
    maxImage.setAttribute("src", `img/${count + 1}.png`)
}

document.querySelector('.next').addEventListener('touchend', nextFunction);
// document.querySelector('.next').addEventListener('click', nextFunction);
document.querySelector('.prev').addEventListener('touchend', prevFunction);
// document.querySelector('.prev').addEventListener('click', prevFunction);
document.querySelector('.reset').addEventListener('touchend', resFunction);
// document.querySelector('.reset').addEventListener('click', resFunction);
