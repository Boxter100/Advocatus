// Toggle para Asesoría legal
document.getElementById('asesoriaLegalToggle').addEventListener('click', () => {
  const content = document.getElementById('asesoriaLegalContent');
  const arrow = document.getElementById('asesoriaLegalArrow');
  
  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen'); // Cambia según el tamaño que quieras que tenga el bloque cuando esté visible
  arrow.classList.toggle('rotate-180'); // Rota la flecha
  
  // Cambiar transición suave
  content.style.transition = 'max-height 0.5s ease';
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
  content.style.transition = 'max-height 0.5s ease';
});
