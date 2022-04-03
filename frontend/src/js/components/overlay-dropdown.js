
(() => {
     function sizeDropdown() {
            const header = document.querySelector('header');
            const menu = document.querySelector('#menu-header');
            const overlayDropdown = document.createElement('div');
            overlayDropdown.classList.add('menu__overlay');
            header.append(overlayDropdown);
            menu.addEventListener('mouseover', (e) => {
                const screenWidth = document.documentElement.clientWidth;
                if (screenWidth < 575) {
                    return;
                }
                const target = e.target;
                if (target.closest('.menu__dropdown-item')) {
                    overlayDropdown.classList.add('visible');
                }
            })
            menu.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    overlayDropdown.classList.remove('visible');
                },300)
            })

    }
    sizeDropdown()
})()
