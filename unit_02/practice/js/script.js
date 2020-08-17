let inputIn = document.querySelector('.input-in');
let button = document.querySelector('.btn');
let out = document.querySelector('.out');


button.onclick = function () {
    //console.log(inputIn.value);
    let b = +inputIn.value;
    console.log(b + 10);
    console.log(typeof b);
    inputIn.value = '';
    out.innerHTML = b;
}