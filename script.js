// Espera a que el contenido del DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha cargado completamente.');

    // Maneja el envío del formulario de contacto
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        });
    }
});
