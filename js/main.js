window.addEventListener('DOMContentLoaded', () => {
    // header banner
    const closeBannerBtn = document.querySelector('[data-close]'),
          headerBanner = document.querySelector('.header__banner');

    function closeBanner(){
        headerBanner.classList.add('hidden');
    }

    closeBannerBtn.addEventListener('click', closeBanner);


    
});