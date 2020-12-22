function capital(navigation) {
    for (let i = 0; i < navigation.length; i++) {
        navigation[i].innerText =
            navigation[i].innerText.toUpperCase();
    }
}
capital(document.querySelectorAll("li"));

const filterBox = document.querySelectorAll('.box');
document.querySelector('nav').addEventListener('click', event => {
    let filterClass = event.target.dataset['f'];
    if (event.target.tagName !== 'LI') {
        return false;
    }
    else if (filterClass == 'all') {
        filterBox.forEach(elem => {
            // console.log(elem.classList);
            if (elem.classList.contains("hide")) {
                elem.classList.remove('hide');
                elem.classList.add('show')
            }
        })
    }
    else {
        filterBox.forEach(elem => {
            elem.classList.remove('hide');
            elem.classList.remove('show');
            if (!elem.classList.contains(filterClass) /*&& filterClass !== "all"*/) {
                elem.classList.add('hide')
            }
        })
    }
});