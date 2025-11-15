// Анимация появления секций
const sections = document.querySelectorAll(".section");

function showSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) sec.classList.add("show");
    });
}

window.addEventListener("scroll", showSections);
showSections();

// Плавная прокрутка по меню
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Подсветка активного пункта меню
const navLinks = document.querySelectorAll(".navbar a");

function updateActive() {
    let fromTop = window.scrollY + 150;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActive);
updateActive();