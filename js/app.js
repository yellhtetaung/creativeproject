
let scrollPosition = 0;
let navBar = document.getElementsByTagName('nav')[0].classList;

// for scrollY
document.addEventListener('scroll', function (){
    scrollPosition = window.scrollY;
    navBar.add('bg-light');
    navBar.replace('navbar-dark','navbar-light');
    if (scrollPosition === 0){
        if(window.innerWidth >= 991){
            navBar.remove("bg-light");
            navBar.replace('navbar-light','navbar-dark');
        }
    }
})

// for navbar md view
window.addEventListener("resize", (function onResize () {
    if (window.innerWidth <= 991){
        navBar.add('bg-light');
        navBar.replace('navbar-dark','navbar-light');
    } else if(window.innerWidth >= 991){
        navBar.remove("bg-light");
        navBar.replace('navbar-light','navbar-dark');
    }
    return onResize;
})());

// for footer
let getYear = new Date().getFullYear();
document.getElementById('year').textContent = getYear;