// Toggle para Asesoría legal
document.getElementById('asesoriaLegalToggle').addEventListener('click', () => {
  const content = document.getElementById('asesoriaLegalContent');
  const arrow = document.getElementById('asesoriaLegalArrow');
  
  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen'); // Cambia según el tamaño que quieras que tenga el bloque cuando esté visible
  arrow.classList.toggle('rotate-180'); // Rota la flecha
  
  // Cambiar transición suave
  content.style.transition = 'max-height 0.4s ease';
});

// Toggle para Representación legal
document.getElementById('representacionLegalToggle').addEventListener('click', () => {
  const content = document.getElementById('representacionLegalContent');
  const arrow = document.getElementById('representacionLegalArrow');
  
  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen'); // Cambia según el tamaño que quieras que tenga el bloque cuando esté visible
  arrow.classList.toggle('rotate-180'); // Rota la flecha
  
  // Cambiar transición suave
  content.style.transition = 'max-height 0.4s ease';
});



// Toggle para Áreas
document.getElementById('areasToggle').addEventListener('click', () => {
  const content = document.getElementById('areasContent');
  const arrow = document.getElementById('areasArrow');

  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen'); // Ajusta la altura máxima que desees
  arrow.classList.toggle('rotate-180'); // Gira la flecha

  // Aplicar transición suave
  content.style.transition = 'max-height 0.4s ease-in-out'; // Cambiar según la duración y suavidad deseada

  // Iniciar la animación de las barras de progreso
  if (!content.classList.contains('max-h-0')) {
    startProgressAnimation();
  }
});

// Función para iniciar la animación de las barras de progreso
const startProgressAnimation = () => {
  // Definir los valores de los anchos de las barras (en porcentaje)
  const targetWidths = [70, 70, 80, 90, 100, 100, 100, 70]; // Cambiar según los valores de tus barras

  // Seleccionar solo las barras de progreso que tienen la clase 'progress-bar'
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach((progressBar, index) => {
    // Restablecer el ancho de la barra antes de la animación
    progressBar.style.width = '0%';

    // Iniciar la animación de llenado
    setTimeout(() => {
      progressBar.style.transition = 'width 2s ease'; // Establecer la duración de la animación
      progressBar.style.width = `${targetWidths[index]}%`; // Ajustar el ancho según el valor
    }, 100); // Tiempo de espera antes de comenzar la animación
  });
};




