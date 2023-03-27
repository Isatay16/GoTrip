// Carusel

const owl = $('.owl-carousel');
owl.owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        startPosition: 1,
        items: 1,
        responsive : {
            640 : {
                items: 3,
                startPosition: 1,
            },
            1200 : {
                items: 3,
                margin: 30,
            }
        }
    }
);

$('.slider__prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

$('.slider__next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav icon

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');



navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};
