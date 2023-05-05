// Nav bar and tel transition
const header = document.querySelector('#header');
const tel = document.querySelector('#tel');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
            if (tel) {
                tel.classList.add('tel-scrolled');
            }
        } else {
            header.classList.remove('header-scrolled');
            if (tel) {
                tel.classList.remove('tel-scrolled');
            }
        }
    });

    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
}


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