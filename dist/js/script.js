// hamburger
// toogle [menambahkan class,jika blm ada dan jika class sudah ada hapus classs nya]
// add  [menambahkan class]
// remove   [menghapus class]
const hamburger = document.querySelector('#hamburger');
// nav-menu
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    // nav-menu
    navMenu.classList.toggle('hidden');
});
// end hamburger



// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset >  fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};
// end navbar-fixed