// script.js
const themeToggleButton = document.getElementById('theme-toggle');

function themeChanger() {
    const html = document.documentElement;

    // Tema değişimini kontrol et
    if (html.classList.contains("dark-theme")) {
        html.classList.remove("dark-theme");
        localStorage.setItem('theme', 'light'); // Temayı light olarak kaydet
    } else {
        html.classList.add("dark-theme");
        localStorage.setItem('theme', 'dark'); // Temayı dark olarak kaydet
    }

    console.log("Tema Değiştirildi.");
}

// Sayfa yüklendiğinde temayı kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }
});

// Butona tıklama olayı ekle
themeToggleButton.addEventListener('click', themeChanger);