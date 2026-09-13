document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-registro');
    const mensajeExito = document.getElementById('mensaje-exito');

    const campos = {
        nombre: document.getElementById('nombre'),
        correo: document.getElementById('correo'),
        telefono: document.getElementById('telefono'),
        fecha: document.getElementById('fecha'),
        tipo: document.getElementById('tipo'),
        terminos: document.getElementById('terminos')
    };

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let esValido = true;
        limpiarErrores();
        ocultarMensajeExito();

        if (!campos.nombre.value.trim() || campos.nombre.value.trim().length < 3) {
            mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres.');
            esValido = false;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(campos.correo.value.trim())) {
            mostrarError('correo', 'Ingrese un correo electrónico válido.');
            esValido = false;
        }

        const regexTel = /^[0-9]{7,10}$/;
        if (!regexTel.test(campos.telefono.value.trim())) {
            mostrarError('telefono', 'Ingrese un teléfono válido de 7 a 10 dígitos.');
            esValido = false;
        }

        if (!campos.fecha.value) {
            mostrarError('fecha', 'Seleccione su fecha de nacimiento.');
            esValido = false;
        }

        if (!campos.tipo.value) {
            mostrarError('tipo', 'Debe seleccionar un tipo de inscripción.');
            esValido = false;
        }

        if (!campos.terminos.checked) {
            mostrarError('terminos', 'Debe aceptar los términos y condiciones.');
            esValido = false;
        }

        if (esValido) {
            campos.nombre.value = '';
            campos.correo.value = '';
            campos.telefono.value = '';
            campos.fecha.value = '';
            campos.tipo.value = '';
            campos.terminos.checked = false;
            if (document.getElementById('mensaje')) {
                document.getElementById('mensaje').value = '';
            }

            mensajeExito.textContent = '¡Registro completado con éxito! Bienvenido a Sky V Cosmetics.';
            mensajeExito.classList.add('mostrar');
        }
    });

    formulario.addEventListener('reset', () => {
        limpiarErrores();
        ocultarMensajeExito();
    });

    function mostrarError(campo, mensaje) {
        const elementoError = document.getElementById(`error-${campo}`);
        const input = campos[campo];

        if (elementoError) {
            elementoError.textContent = mensaje;
        }
        if (input && input.type !== 'checkbox') {
            input.classList.add('input-error');
        }
    }

    function limpiarErrores() {
        document.querySelectorAll('.mensaje-error').forEach(span => span.textContent = '');
        document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
    }

    function ocultarMensajeExito() {
        mensajeExito.classList.remove('mostrar');
        mensajeExito.textContent = '';
    }
});