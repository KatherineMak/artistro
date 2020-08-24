import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.tutorials__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    spaceBetween: 25,
    breakpoints: {
    767: {
        slidesPerView: 3,
    },
    450: {
        slidesPerView: 2,
    },
}
});

const popularSlider = new Swiper('.slider-popular', {
    slidesPerView: 1,
    spaceBetween: 25,
    // slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 4,
        },
        450: {
            slidesPerView: 2,
        }
    }
});

const reviewsSlider = new Swiper('.slider-reviews', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        767: {
            slidesPerView: 2,
        }
    }
});

const recommendationSlider = new Swiper('.recommendation__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        767: {
            slidesPerView: 4,
        },
        450: {
            slidesPerView: 2,
        }
    }
});

const catalogSlider = new Swiper('.catalog-slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.catalog-slider__next',
        prevEl: '.catalog-slider__prev',
    }
});

const galleryThumbs = new Swiper('.product-slider-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        1280: {
            slidesPerView: 6,
        },
        767: {
            slidesPerView: 4,
        }
    }
});

const galleryTop = new Swiper('.product-slider', {
    thumbs: {
        swiper: galleryThumbs
    }
});


const videosSlider = new Swiper('.videos-slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        450: {
            slidesPerView: 2,
        }
    }
});