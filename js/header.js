window.addEventListener('scroll', function () {


    const header = document.querySelector('.page-header');


  

    if (window.scrollY >= 600) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }


});


