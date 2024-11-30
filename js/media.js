const mediaElements = document.querySelector(".media-html");
function checkBreakpoint() {
    const width = window.innerWidth;
    const containerElements = document.querySelectorAll(".container");

    // Mevcut sınıfları temizle
    mediaElements.classList.remove("fs-xs");
    mediaElements.classList.remove("fs-sm");
    mediaElements.classList.remove("fs-md");
    mediaElements.classList.remove("fs-lg");
    mediaElements.classList.remove("fs-xl");
    mediaElements.classList.remove("fs-xxl");

    containerElements.forEach(element => {
        element.className = 'container'; // Başlangıçta sadece "container" sınıfını tut
    });

    if (width < 576) {
        console.log('Current breakpoint: xs');
        mediaElements.classList.add("fs-xs");
        containerElements.forEach(element => element.classList.add("container-xs"));
    } else if (width >= 576 && width < 768) {
        console.log('Current breakpoint: sm');
        mediaElements.classList.add("fs-sm");
        containerElements.forEach(element => element.classList.add("container-sm"));
    } else if (width >= 768 && width < 992) {
        console.log('Current breakpoint: md');
        mediaElements.classList.add("fs-md");
        containerElements.forEach(element => element.classList.add("container-md"));
    } else if (width >= 992 && width < 1200) {
        console.log('Current breakpoint: lg');
        mediaElements.classList.add("fs-lg");
        containerElements.forEach(element => element.classList.add("container-lg"));
    } else if (width >= 1200 && width < 1400) {
        console.log('Current breakpoint: xl');
        mediaElements.classList.add("fs-xl");
        containerElements.forEach(element => element.classList.add("container-xl"));
    } else {
        console.log('Current breakpoint: xxl');
        mediaElements.classList.add("fs-xxl");
        containerElements.forEach(element => element.classList.add("container-xxl"));
    }
}

// İlk yüklemede kontrol et
checkBreakpoint();

// Pencere boyutu değiştiğinde kontrol et
window.addEventListener('resize', checkBreakpoint);