import jump from "jump.js";

const toplink = document.querySelector('.to-top-link');
const scrolldown = document.querySelector('.scroll-down');

if(toplink) {
    toplink.addEventListener('click', (ev) => {
        ev.preventDefault();

        jump(document.body);
    }, false);
}

if(scrolldown) {
    scrolldown.addEventListener('click', (ev) => {
        ev.preventDefault();
        jump(document.querySelector('.t-shirts'));
    }, false);
}
