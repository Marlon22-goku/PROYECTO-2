// script.js

// Ejemplo de función que se ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha cargado completamente.');

    // Ejemplo de código para manejar eventos
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        });
    }
});
