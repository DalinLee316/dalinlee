document.addEventListener("DOMContentLoaded", function() {
    // Плавное появление заголовка на странице About Me
    setTimeout(() => {
        document.getElementById("about-me-heading").style.opacity = "1";
    }, 1000);

    // Эффект печатной машинки для текста на странице About Me
    const text = "Hello! My name is Dalin, and I’m a freelancer with a diverse skill set. I work with tools like CapCut, Adobe Photoshop, After Effects, and have experience in Python, CSS, and JavaScript. Additionally, I use Canva to create visual content. I recently moved to Toronto, Canada, to further develop my skills and explore new exciting projects. I’m dedicated to quality work and always strive to complete tasks as quickly as possible while considering my clients' needs. I’m fluent in English, Russian, Ukrainian, and Spanish, which allows me to work with clients from all over the world.";
    let index = 0;
    const speed = 50;
    const typedTextElement = document.getElementById("typed-text");

    function typeWriter() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    setTimeout(typeWriter, 2000); // Задержка перед началом эффекта печатной машинки
});
