const menu = document.querySelector('.mobile-menu');
const closeham = document.querySelector('.close-ham');
const closemenu = document.querySelector('.close-menu');
const openmenu = document.querySelector('.open-menu');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closemenu.style.display = 'none';
    openmenu.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closemenu.style.display = 'block';
    openmenu.style.display = 'none';
  }
}

closeham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.mobileLink');

menuLinks.forEach(
  (mobileLink) => {
    mobileLink.addEventListener('click', toggleMenu);
  },
);
