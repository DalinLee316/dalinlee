document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Получение элементов
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

if (modal && btn && span) {
    // Открытие модального окна при нажатии на кнопку
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Закрытие модального окна при нажатии на крестик
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрытие модального окна при клике на затемнённую область
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
