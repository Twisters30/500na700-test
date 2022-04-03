import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper('.hero__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 20,
});

const swiperNews = new Swiper('.news__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // grid: {
    //     rows: 2,
    // },
    observer: true,
    spaceBetween: 20,
    breakpoints: {
        435: {
            slidesPerView:2,
            slidesPerGroup: 2,
        }
    }
})
