import jump from "jump.js";

const toplink = document.querySelector('.to-top-link');
if(toplink) {
    toplink.addEventListener('click', (ev) => {
        ev.preventDefault();

        jump(document.body);
    }, false);
}
