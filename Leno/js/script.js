document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    const modal = document.querySelector('#videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.querySelector('#videoPlayer');

    // Open modal
    videoButton.addEventListener('click', function () {
        modal.classList.add('active');
        videoPlayer.src =
            'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    });

    // Close modal
    closeButton.addEventListener('click', function () {
        modal.classList.remove('active');
        videoPlayer.src = '';
    });
    //close modal when clicking outside the video
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            videoPlayer.src = '';
        }
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});
