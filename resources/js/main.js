// Nav bar and tel transition
const navbar = document.querySelector('.navbar');
const mynavbar = document.querySelector('#mynavbar');
const tel = document.querySelector('#tel');

function navbarScrolled() {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-dark');
        navbar.classList.remove('navbar-light');
        if (mynavbar) {
            mynavbar.classList.add('mynavbar-scrolled');
        }
        if (tel) {
            tel.classList.add('tel-scrolled');
        }
    } else {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        if (mynavbar) {
            mynavbar.classList.remove('mynavbar-scrolled');
        }
        if (tel) {
            tel.classList.remove('tel-scrolled');
        }
    }
}

window.addEventListener('load', navbarScrolled);
window.addEventListener('scroll', navbarScrolled);

// Gallery carousel
$(document).ready(function () {
    $("#show-carousel").click(function () {
        $(".row-cols-3").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    });
});