const webButton = document.getElementById("web-button");
const appButton = document.getElementById("app-button");
const gameButton = document.getElementById("game-button");

const previewMenu = document.querySelector(".menu-preview");
const previewMenuSlider = document.querySelector(".menu-preview .real .slider");

const menuButtons = document.querySelectorAll(".navbar .container .menu button");
let focusIndex = 1;

// Kontrol et: Öğeler null mı?
if (webButton && appButton && gameButton && previewMenu && previewMenuSlider) {
    webButton.addEventListener("mouseenter", () => handleMouseEnter(webButton, 1, "translateX(0%)"));
    appButton.addEventListener("mouseenter", () => handleMouseEnter(appButton, 2, "translateX(-100%)"));
    gameButton.addEventListener("mouseenter", () => handleMouseEnter(gameButton, 3, "translateX(-200%)"));

    menuButtons.forEach(button => {
        button.addEventListener("mouseenter", showPreviewMenu);
        button.addEventListener("mouseleave", hidePreviewMenu);
    });

    previewMenu.addEventListener("mouseenter", showPreviewMenu);
    previewMenu.addEventListener("mouseleave", previewMenuMouseLeave);
} else {
    console.error("Bir veya daha fazla öğe bulunamadı.");
}

function handleMouseEnter(button, index, transformValue) {
    previewMenuSlider.style.transform = transformValue;
    showPreviewMenu();
    focusIndex = index;
    setFocusElement(button);
}

function showPreviewMenu() {
    previewMenu.style.opacity = "1";
    previewMenu.style.pointerEvents = "auto";
    previewMenu.style.transform = "translate(-50%, 100%)";
}

function hidePreviewMenu() {
    if (focusIndex === 0) return; // Eğer bir odak yoksa çıkış yapma
    previewMenu.style.opacity = "0";
    previewMenu.style.pointerEvents = "none";
    previewMenu.style.transform = "translate(-50%, 120%)";
}

function previewMenuMouseLeave() {
    hidePreviewMenu();
    resetFocus();
}

function setFocusElement(element) {
    resetFocus();
    element.classList.add("focus-element");
}

function resetFocus() {
    menuButtons.forEach(button => {
        button.classList.remove("focus-element");
    });
}