const menu_button = document.querySelector(".menu-button");
const offcanvas = document.querySelector(".offcanvas");
const inputCont = document.querySelector(".input-cont");

menu_button.addEventListener("click", offcanvas_open);

function offcanvas_open() {
    if (!offcanvas.classList.contains("offcanvas-on")) {
        offcanvas.classList.add("offcanvas-on");
        menu_button.innerHTML = `<i class="ri-close-large-line"></i>`;
    } else {
        offcanvas.classList.remove("offcanvas-on");
        menu_button.innerHTML = `<i class="ri-menu-line"></i>`;
    }
}

const navbarRight = document.querySelector(".navbar");
function search_open() {
    if (!inputCont.classList.contains("search-open")) {
        inputCont.classList.add("search-open");
        navbarRight.classList.add("navbar-search-mode");
        document.querySelector(".search-mobile-button").innerHTML = `<i class="ri-close-large-line"></i>`;
    } else {
        inputCont.classList.remove("search-open");
        navbarRight.classList.remove("navbar-search-mode");
        document.querySelector(".search-mobile-button").innerHTML = `<i class="ri-search-line"></i>`;
    }
}

function toggleSubMenu(button) {
    const submenu = button.nextElementSibling;
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        button.querySelector(".ri-arrow-down-s-line").style.transform = "rotate(0deg)";
        
    } else {
        submenu.style.display = 'block';
        button.querySelector(".ri-arrow-down-s-line").style.transform = "rotate(180deg)";
    }
}