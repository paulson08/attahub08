let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#navlist');

menu.oneclick = () => {
    menu.classlistt.toggle('bx-x');
    navlist.classlistt.toggle('open');
}

const sr = scrollreveal ({
    distance: '65px',
    duration: 2600,
    Delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.front-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});