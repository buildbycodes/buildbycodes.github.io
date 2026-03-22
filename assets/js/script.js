const btn  = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('menu-icon');

btn.addEventListener('click', () => {
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('scale-95');
    menu.classList.toggle('pointer-events-none');

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('opacity-0','scale-95','pointer-events-none');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});