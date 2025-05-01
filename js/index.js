document.addEventListener('DOMContentLoaded', function () {
    const enlaces = document.querySelectorAll('.open-img');
    const overlay = document.querySelector('.overlay');
    const expandedImg = document.querySelector('.expanded-img');
    const closeBtn = document.querySelector('.close-btn'); 
    let currentIndex;

    enlaces.forEach((enlace, index) => {
        const imagen = enlace.querySelector('img');
        const miniaturaUrl = imagen.getAttribute('src'); 
        const imagenUrl = enlace.getAttribute('href'); 

        enlace.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            overlay.style.display = 'flex';
            expandedImg.src = imagenUrl;

            currentIndex = index;

            const images = Array.from(enlaces);
            document.querySelector('.arrow.left').addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                expandedImg.src = images[currentIndex].getAttribute('href');
            });

            document.querySelector('.arrow.right').addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                expandedImg.src = images[currentIndex].getAttribute('href');
            });
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === this) {
            overlay.style.display = 'none';
        }
    });
});
