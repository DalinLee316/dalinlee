// Открытие и закрытие модального окна
document.querySelector('.animated-link').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); // Плавный переход к секции проектов
});
