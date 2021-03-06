window.addEventListener('DOMContentLoaded', () => {
    // header banner
    const closeBannerBtn = document.querySelector('[data-close]'),
          headerBanner = document.querySelector('.header__banner');

    function closeBanner(){
        headerBanner.classList.add('hidden');
    }

    closeBannerBtn.addEventListener('click', closeBanner);


    // Выпадающее меню header
    const menuLinkOpen = document.querySelector('#menu__link-open'),
          menuIcon = document.querySelector('.menu__list-icon'),
          subMenu = document.querySelector('.sub-menu__list');


    function openMenuLink(){
        subMenu.classList.toggle('hidden');
    };
    
    menuLinkOpen.addEventListener('click', openMenuLink);
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('sub-menu__list')){
            console.log('1');
        }
    })
});