
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
// let param = 'auth=5ADcB96BA48d3f80&action=';
const auth = "auth=5ADcB96BA48d3f80&";
const server = 'http://getpost.itgid.info/index2.php?';

function param(obj) {
    let parameters = '';
    for (let key in obj) {
        parameters += '&' + key + "=" + obj[key];
    }
    return parameters;
}

function t1(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
            console.log(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}

function outFunc(data) {
    document.querySelector('.out-1').innerHTML = data;
}

function one() {
    let p = {
        action: 1
    }
    t1("GET", p, outFunc);
}

document.querySelector('.b-1').onclick = one;
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */
function t2(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc2(data) {
    document.querySelector('.out-2').innerHTML = data;
}

function two() {
    let p = {
        action: 2,
        name: "Illia"
    }
    t2("GET", p, outFunc2);
}
document.querySelector('.b-2').onclick = two;

// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc3(data) {
    document.querySelector('.out-3').innerHTML = data;
}

function three() {
    let p = {
        action: 3,
        num1: 2,
        num2: 5
    }
    t3("GET", p, outFunc3);
}
document.querySelector('.b-3').onclick = three;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc4(data) {
    document.querySelector('.out-4').innerHTML = data;
}

function four() {
    let p = {
        action: 4,
        num1: 3,
        num2: 9
    }
    t4("GET", p, outFunc4);
}
document.querySelector('.b-4').onclick = four;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc5(data) {
    document.querySelector('.out-5').innerHTML = data;
}

function five() {
    let p = {
        action: 5
    }
    t5("GET", p, outFunc5);
}
document.querySelector('.b-5').onclick = five;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc6(data) {
    document.querySelector('.out-6').innerHTML = data;
}

function six() {
    let p = {
        action: 6,
        num1: 3,
        num2: 9
    }
    t6("GET", p, outFunc6);
}
document.querySelector('.b-6').onclick = six;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc7(data) {
    document.querySelector('.out-7').innerHTML = data;
}

function seven() {
    let p = {
        action: 7
    }
    t7("GET", p, outFunc7);
}
document.querySelector('.b-7').onclick = seven;

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc8(data) {
    document.querySelector('.out-8').innerHTML = data;
}

function eigth() {
    let p = {
        action: 8,
        year: 1987
    }
    t8("GET", p, outFunc8);
}
document.querySelector('.b-8').onclick = eigth;

// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc9(data) {
    document.querySelector('.out-9').innerHTML = data;
}

function nine() {
    let p = {
        action: 9,
        // y: 1,
        // m: 1,
        d: 1
    }
    t9("GET", p, outFunc9);
}
document.querySelector('.b-9').onclick = nine;

// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc10(data) {
    document.querySelector('.out-10').innerHTML = data;
}

function ten() {
    let p = {
        action: 1
    }
    t10("POST", p, outFunc10);
}
document.querySelector('.b-10').onclick = ten;
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc11(data) {
    document.querySelector('.out-11').innerHTML = data;
}

function eleven() {
    let p = {
        action: 2,
        name: "Illia"
    }
    t11("POST", p, outFunc11);
}
document.querySelector('.b-11').onclick = eleven;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc12(data) {
    document.querySelector('.out-12').innerHTML = data;
}

function twelve() {
    let p = {
        action: 3,
        num1: 2,
        num2: 5
    }
    t12("POST", p, outFunc12);
}
document.querySelector('.b-12').onclick = twelve;

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc13(data) {
    document.querySelector('.out-13').innerHTML = data;
}

function thrteen() {
    let p = {
        action: 4,
        num1: 3,
        num2: 9
    }
    t13("POST", p, outFunc13);
}
document.querySelector('.b-13').onclick = thrteen;

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc14(data) {
    document.querySelector('.out-14').innerHTML = data;
}

function frteen() {
    let p = {
        action: 5
    }
    t14("POST", p, outFunc14);
}
document.querySelector('.b-14').onclick = frteen;

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc15(data) {
    document.querySelector('.out-15').innerHTML = data;
}

function ffteen() {
    let p = {
        action: 6,
        num1: 3,
        num2: 9
    }
    t15("POST", p, outFunc15);
}
document.querySelector('.b-15').onclick = ffteen;

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc16(data) {
    document.querySelector('.out-16').innerHTML = data;
}

function sxteen() {
    let p = {
        action: 7
    }
    t16("POST", p, outFunc16);
}
document.querySelector('.b-16').onclick = sxteen;

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc17(data) {
    document.querySelector('.out-17').innerHTML = data;
}

function svnteen() {
    let p = {
        action: 8,
        year: 1987
    }
    t17("POST", p, outFunc17);
}
document.querySelector('.b-17').onclick = svnteen;

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18(method, params, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xhttp.open(method, server + auth + param(params), true);
    xhttp.send();
}
function outFunc18(data) {
    document.querySelector('.out-18').innerHTML = data;
}

function eightteen() {
    let p = {
        action: 9,
        // y: 1,
        // m: 1,
        d: 1
    }
    t18("POST", p, outFunc18);
}
document.querySelector('.b-18').onclick = eightteen;

// ваше событие здесь!!!

