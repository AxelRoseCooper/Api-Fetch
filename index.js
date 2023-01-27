
let url = "https://reqres.in/api/users?delay=3";
const resultados = document.getElementById("data");

const button = document.getElementById("post")
button.addEventListener("click",mostrarLosDatos)

async function mostrarLosDatos(){
  let body = "";
  let resultado = await checarHora()
  resultado.forEach(function (element) {
    body += `<tr>
          <td class="col-sm align-middle" >${element.id}</td>
          <td class="col-sm align-middle">${element.first_name}</td>
          <td class="col-sm align-middle">${element.last_name}</td>
          <td class="col-sm align-middle">${element.email}</td>
          <td class="col-sm align-middle">
          <img class="rounded-circle img-fluid " src="${element.avatar}">  </img>
          </td> 
          </tr>`;
  });
  resultados.innerHTML = body;
  
}
function obtenerDatosFetch() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
}

function obtenerTiempo() {
  
  let fecha = new Date();
  fecha.setMinutes(fecha.getMinutes() + 1);
  return fecha;
}

async function nuevosDatos() {

  let datosFetch = await obtenerDatosFetch();
  localStorage.setItem("datosFetch", JSON.stringify(datosFetch));
  localStorage.setItem("fecha-Caducidad", obtenerTiempo());
  console.log(obtenerDatosDeLocal("datosFecth")); 
  return obtenerDatosDeLocal(); 
}

function obtenerDatosDeLocal() {
 
  return JSON.parse(localStorage.getItem("datosFetch"));
}

function checarHora() {
  const tiempoSolicitud = new Date(localStorage.getItem("Fecha-Caducidad"));
  if (new Date() > tiempoSolicitud) {
    return nuevosDatos();
  }
  return obtenerDatosDeLocal(); 
}

