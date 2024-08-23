document.addEventListener("DOMContentLoaded", () => {
    // Ожидаем полное появление логотипа
    setTimeout(() => {
        document.getElementById("menu").classList.add("menu-appear");
        document.getElementById("social-links").classList.add("social-appear");
        
        // Появление основного контента через 1 секунду
        setTimeout(() => {
            document.getElementById("about-me").classList.add("content-appear");
            document.getElementById("my-projects").classList.add("content-appear");
        }, 1000);
    }, 3000); // Задержка после логотипа (3 сек.)
});

