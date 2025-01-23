// Lista para rastrear las áreas abiertas
let openAreas = [];

// Toggle para Asesoría legal
document.getElementById('asesoriaLegalToggle').addEventListener('click', () => {
  const content = document.getElementById('asesoriaLegalContent');
  const arrow = document.getElementById('asesoriaLegalArrow');
  
  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen');
  arrow.classList.toggle('rotate-180');
  
  // Cambiar transición suave
  content.style.transition = 'max-height 0.4s ease';
});

// Toggle para Representación legal
document.getElementById('representacionLegalToggle').addEventListener('click', () => {
  const content = document.getElementById('representacionLegalContent');
  const arrow = document.getElementById('representacionLegalArrow');
  
  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen');
  arrow.classList.toggle('rotate-180');
  
  // Cambiar transición suave
  content.style.transition = 'max-height 0.4s ease';
});

// Toggle para Áreas
document.getElementById('areasToggle').addEventListener('click', () => {
  const content = document.getElementById('areasContent');
  const arrow = document.getElementById('areasArrow');
  
  // Cambiar transición suave
  content.style.transition = 'max-height 0.4s ease';

  // Alternar visibilidad y dirección de la flecha
  content.classList.toggle('max-h-0');
  content.classList.toggle('max-h-screen');
  arrow.classList.toggle('rotate-180');
});

// Función para manejar los sub-toggles con límite de 4 áreas abiertas
function toggleSubContentWithLimit(toggleId, contentId, arrowId) {
  document.getElementById(toggleId).addEventListener('click', () => {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(arrowId);

    // Cambiar transición suave
    content.style.transition = 'max-height 0.4s ease';

    if (content.classList.contains('max-h-0')) {
      // Si el área se abre
      content.classList.remove('max-h-0');
      content.classList.add('max-h-screen');
      arrow.classList.add('rotate-180');

      // Añadir esta área a la lista de abiertas
      openAreas.push({ toggleId, contentId, arrowId });

      // Si hay más de 4 áreas abiertas, cerrar la más antigua
      if (openAreas.length > 2) {
        const oldestArea = openAreas.shift(); // Remover la primera abierta
        const oldestContent = document.getElementById(oldestArea.contentId);
        const oldestArrow = document.getElementById(oldestArea.arrowId);

        oldestContent.classList.add('max-h-0');
        oldestContent.classList.remove('max-h-screen');
        oldestArrow.classList.remove('rotate-180');
      }
    } else {
      // Si el área se cierra
      content.classList.add('max-h-0');
      content.classList.remove('max-h-screen');
      arrow.classList.remove('rotate-180');

      // Remover esta área de la lista de abiertas
      openAreas = openAreas.filter(area => area.contentId !== contentId);
    }
  });
}

// Inicializar los toggles con límite para las áreas
toggleSubContentWithLimit('laboralToggle', 'laboralContent', 'laboralArrow');
toggleSubContentWithLimit('familiarToggle', 'familiarContent', 'familiarArrow');
toggleSubContentWithLimit('penalToggle', 'penalContent', 'penalArrow');
toggleSubContentWithLimit('admiToggle', 'admiContent', 'admiArrow');
toggleSubContentWithLimit('civilToggle', 'civilContent', 'civilArrow');
toggleSubContentWithLimit('mercaToggle', 'mercaContent', 'mercaArrow');
toggleSubContentWithLimit('constToggle', 'constContent', 'constArrow');
toggleSubContentWithLimit('fiscalToggle', 'fiscalContent', 'fiscalArrow');

