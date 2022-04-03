(() => {
    class Accordion {
        static clickAccordion(elem) {
            const accordion = document.querySelector(elem);
            accordion.addEventListener('click', (e) => {
                const target = e.target;
                if (target.closest('.accordion__btn')) {
                    const content = target.nextElementSibling;
                    content.classList.toggle('show');
                    if (content.classList.contains('show')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        target.setAttribute('aria-expanded', true);
                        content.setAttribute('aria-hidden', false);
                    } else {
                        target.setAttribute('aria-expanded', false);
                        content.setAttribute('aria-hidden', true);
                        content.style.maxHeight = null;
                    }
                }
            })
        }
    }
    Accordion.clickAccordion('.accordion');
})()
