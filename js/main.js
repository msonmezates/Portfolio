// Define all DOM elements
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuNav = document.querySelector('.menu-nav');
const menuImage = document.querySelector('.menu-image');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

toggleMenu = () => {
  if (!showMenu) {
    menuButton.classList.add('close')
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuImage.classList.add('show');
    navItems.forEach(navItem => navItem.classList.add('show')); //note that navitems is a node list

    // Set menu state
    showMenu = true;
  } else { // do the opposite of if statement
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuImage.classList.remove('show');
    navItems.forEach(navItem => navItem.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}

menuButton.addEventListener('click', toggleMenu);



