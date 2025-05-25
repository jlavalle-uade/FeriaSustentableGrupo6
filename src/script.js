//Acá va a ir todo el javascript que usemos en las paginas
//evento al hacer click en un boton
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las tarjetas de información
    const tarjetasInfo = document.querySelectorAll('.tarjeta-info');
    // Selecciona todas las tarjetas de miembros del equipo
    const tarjetasMiembro = document.querySelectorAll('.tarjeta-miembro');

    // Función para añadir/quitar la clase 'resaltado'
    const toggleResaltado = (element, addClass) => {
        if (addClass) {
            element.classList.add('resaltado');
        } else {
            element.classList.remove('resaltado');
        }
    };

    // AñadirEventListeners a las tarjetas de información
    tarjetasInfo.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            toggleResaltado(tarjeta, true);
        });
        tarjeta.addEventListener('mouseleave', () => {
            toggleResaltado(tarjeta, false);
        });
    });

    // AñadirEventListeners a las tarjetas de miembros del equipo
    tarjetasMiembro.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            toggleResaltado(tarjeta, true);
        });
        tarjeta.addEventListener('mouseleave', () => {
            toggleResaltado(tarjeta, false);
        });
    });
    });
