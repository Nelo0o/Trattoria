document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu nav ul');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});
