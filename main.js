document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    // Плавный скроллинг к следующему разделу
    function scrollToSection(index) {
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Отслеживаем прокрутку
    window.addEventListener('wheel', function(e) {
        if (e.deltaY > 0) {
            if (currentIndex < sections.length - 1) {
                currentIndex++;
                scrollToSection(currentIndex);
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
                scrollToSection(currentIndex);
            }
        }
    });

    // Обрабатываем клик на навигации
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            scrollToSection(currentIndex);
        });
    });
});
