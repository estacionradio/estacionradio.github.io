document.getElementById('share-button').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Compartir contenido',
                text: 'Este es el texto que quiero compartir.',
                url: 'https://tu-sitio-web.com',
            });
            console.log('Contenido compartido exitosamente');
        } catch (error) {
            console.error('Error al compartir:', error);
        }
    } else {
        alert('La API de Web Share no es compatible con este navegador.');
    }
});
document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('radio');
    audio.style.display = 'block';
    audio.play().then(() => {
        console.log('Reproducción iniciada con éxito');
    }).catch(error => {
        console.error('Error al reproducir el audio:', error);
        alert('No se pudo reproducir el audio. Por favor, revisa los permisos del navegador.');
    });
});
