const form = document.getElementById('reservationForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Recopila los datos del formulario
  const data = {
    Fecha: form.fecha.value,
    Hora: form.hora.value,
    Nombre: form.nombre.value,
    Apellido: form.apellido.value,
    Telefono: form.telefono.value,
    Correo: form.correo.value
  };

  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = "Enviando...";

  try {
    // Envía los datos al Google App Script
    const response = await fetch('https://script.google.com/macros/s/AKfycbznbUHV36aRB83YTfIzLYl_IyVU7InpocBC7Pp73BU8rVIUDP-_hqOdVc5hJHiDJqjb/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Procesa la respuesta
    const result = await response.json();
    responseMessage.textContent = result.message;
  } catch (error) {
    // Maneja errores
    responseMessage.textContent = "Error al enviar los datos. Inténtalo de nuevo.";
  }
});
