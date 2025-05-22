function enviarFormulario() {
  const nombre = document.getElementById("name").value;
  // falta validación del campo
  alert("Formulario enviado con nombre: " + nombre);
}

function cargarContenido() {
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML += "<p>Nuevo párrafo cargado sin control.</p>";
}

function llamarAPI() {
  fetch("https://api-inventada-que-no-existe.com/data")
    .then(response => response.json())
    .then(data => {
      document.getElementById("respuestaAPI").innerText = data.message;
    });
    // falta catch para manejar errores
}
