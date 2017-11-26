var menuBtn = document.getElementById('toggle-menu');
var menu = document.getElementById('navigation-mobile');

menuBtn.addEventListener('click', function() { 
    if (menu.style.maxHeight == '' || menu.style.maxHeight === '0px') {
        menu.style.maxHeight = '100vh'; 
    } else if (menu.style.maxHeight == '100vh') {
        menu.style.maxHeight = '0px';
    }
});