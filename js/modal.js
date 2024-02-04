// const modalContainer = document.getElementById('modal');
// function showModal() {
//     modalContainer.classList.add('open');
//     document.body.style.overflow = 'hidden';
// } 
// showModal ();
// function removeStyleModal() {
//     const modalContainer = document.getElementById('modal');
//     modalContainer.classList.remove('open');
//     document.body.style.overflow = 'visible';
// }
// function closeModal() {
//     const closeModalBtn = document.querySelector('.books-grid__modal-close');
//     const modalContainer = document.getElementById('modal');
//     const modalBox = document.querySelector('.books-grid__modal-box');
//     closeModalBtn.addEventListener('click', () => {
//         removeStyleModal();
//     });
//     modalBox.addEventListener('click', (event) => {
//         event._isClickWithInModal = true;
//     });
//     modalContainer.addEventListener('click', (event) => {
//         if (event._isClickWithInModal) return;
//         removeStyleModal();
//     });
//     window.addEventListener('keydown', (btn) => {
//         if (btn.key === "Escape") {
//             removeStyleModal();
//         }
//     });
// }
// closeModal();

const menuItems = document.querySelectorAll('.books-grid__item');
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        let modal = document.getElementById('modal' + (index + 1));
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';


        let closeBtn = modal.querySelector('.books-grid__modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'visible';
        });

        window.addEventListener('keydown', (btn) => {
            if (btn.key === "Escape") {
                modal.classList.remove('open');
                document.body.style.overflow = 'visible';
            }
        });

        const modalBox = modal.querySelector('.books-grid__modal-box');
        modalBox.addEventListener('click', (event) => {
            event._isClickWithInModal = true;
        });
        modal.addEventListener('click', (event) => {
            if (event._isClickWithInModal) return;
            modal.classList.remove('open');
            document.body.style.overflow = 'visible';
        });
    })
})