(() => {
   class Form {
       clickSubmit() {
           const btnSubmit = document.querySelector('.submit-btn');
           const form = document.querySelector('.subscribe__form');
           form.addEventListener('submit', (e) => {
               e.preventDefault();
           })
           btnSubmit.addEventListener('click', () => {
               this.validation(form);
           })
       }
       validation(form) {
           const inputs = form.querySelectorAll('input');
           inputs.forEach((el) => {
               if (el.value) {
                   el.classList.add('bg-success');
                   setTimeout(() => {
                       el.classList.remove('bg-success')
                   },300)
               } else {
                   el.classList.add('bg-danger');
                   setTimeout(() => {
                       el.classList.remove('bg-danger')
                   },300)
                   return;
               }
           })
       }
   }
   const form = new Form();
   form.clickSubmit();
})()
