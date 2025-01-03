document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.querySelector('.sidenav');
    const btn = document.querySelector('#btn');
    const overlayScreen = document.querySelector('.navoverlay');

    btn.addEventListener('click', () => {
        sideNav.classList.add('open');
    });

    overlayScreen.addEventListener('click', () => {
        sideNav.classList.remove('open');
    });
});