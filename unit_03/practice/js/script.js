let age = document.querySelector('.age');
let out = document.querySelector('.out');
const btn = document.querySelector('.btn')

function f9() {
    if (age.value <= 17) {
        out.innerHTML = ('Sorry');
    }
    else {
        out.innerHTML = ('Welcome');
    }
}

btn.onclick = f9;