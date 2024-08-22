// Открытие и закрытие модального окна
document.querySelector('.animated-link').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById('projects-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('projects-modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('projects-modal')) {
        document.getElementById('projects-modal').style.display = 'none';
    }
});
