document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crea un objeto con los datos
    const templateParams = {
        from_name: nombre,
        from_email: email,
        message: mensaje
    };

    // Envía los datos usando EmailJS
    emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams)
        .then(function(response) {
            alert('Correo enviado exitosamente!');
            document.getElementById('contacto').reset(); // Limpia el formulario
        }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});
