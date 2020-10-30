document.addEventListener("DOMContentLoaded", function(){
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener("click", () => {
        const header = document.querySelector('.header');
        const navigation = document.querySelector('.navigation');
        const navigationDesktop = document.querySelector('.navigation-desktop');
        const isActive = header.classList[1] && header.classList[1].includes('is-active');
        
        if (isActive) {
            header.classList.remove('is-active');
            navigation.classList.remove('is-active');
            hamburger.classList.remove('is-active');
            
        } else {
            header.classList.add('is-active');
            navigation.classList.add('is-active');
            hamburger.classList.add('is-active');
        }
    })
});