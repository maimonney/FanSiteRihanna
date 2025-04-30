// Obtener el modal y el botón de cierre
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var closeBtn = document.getElementById('close-btn');

// Obtener todas las miniaturas de imágenes
var images = document.querySelectorAll('#galeria img');

// Añadir un evento de clic a cada imagen
images.forEach(function(image) {
    image.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir que el enlace se abra en una nueva página

        // Cambiar la imagen del modal a la imagen de alta calidad (data-full)
        modal.style.display = "block";
        modalImg.src = event.target.getAttribute('data-full');
    });
});

// Cerrar el modal cuando se haga clic en la 'X'
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
