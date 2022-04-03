(()=> {
    function clickBurgerMenu(burger, menu) {
        burger.addEventListener('click', () => {

            burger.classList.toggle('burger-open');
            menu.classList.toggle('menu-active');
        })
    }
   document.addEventListener('DOMContentLoaded', () => {
       const burger = document.querySelector('.burger');
       const menu = document.querySelector('.menu');
       clickBurgerMenu(burger, menu);
   })
})()
