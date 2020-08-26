window.onload = function() {

    /* Burger menu */
    let navToggle = document.querySelector('.nav-toggle'),
        nav = document.querySelector('.header__list');

        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });

};