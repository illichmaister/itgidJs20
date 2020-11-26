let navigation = document.querySelectorAll("li");
function capital() {
    console.log(navigation);
    for (let i = 0; i < navigation.length; i++) {
        console.log(navigation[i].innerText);
        let capitalized = navigation[i].innerText.toUpperCase();

    }

}
capital();

const filterBox = document.querySelectorAll('.box');
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName !== 'LI') {
        return false;
    }
    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
});