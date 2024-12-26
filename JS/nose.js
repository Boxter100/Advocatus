document.getElementById('formulario-dinamico').addEventListener('submit', function(e) {
  e.preventDefault();  // Evita que el formulario se envíe de forma tradicional

  // Obtenemos los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;

  // Crear un objeto con los datos a enviar
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('apellido', apellido);
  formData.append('telefono', telefono);
  formData.append('correo', correo);

  // URL del Web App de Google Apps Script
  const url = 'https://script.google.com/macros/s/AKfycbznbUHV36aRB83YTfIzLYl_IyVU7InpocBC7Pp73BU8rVIUDP-_hqOdVc5hJHiDJqjb/exec';  // Sustituye con la URL de tu Web App

  // Enviar los datos al backend (Google Apps Script)
  fetch(url, {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      alert(data);  // Muestra la respuesta del servidor (puedes personalizar esto)
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
