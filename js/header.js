window.addEventListener('scroll', function () {
    const header = document.querySelector('.page-header');
    if (window.scrollY >= 600) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
});

const navList=document.querySelector('.page-header__menu');
const burger = document.querySelector('.burger');
burger.addEventListener('click', function(event){
    event.preventDefault();
    navList.classList.toggle('active');
    burger.classList.toggle('active');
})
