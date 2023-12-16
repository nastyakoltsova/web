document.addEventListener('DOMContentLoaded', function() {
     new Swiper('.swiper', {
        // Параметры Swiper
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Другие настройки по желанию...
    });
});
