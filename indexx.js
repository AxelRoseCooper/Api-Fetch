//const boton = document.getElementById("post");
//boton.addEventListener('click', guardarDatosLocalStorage);
let url = 'https://reqres.in/api/users?delay=1'
const resultados = document.getElementById("data")

function obtenerId(){
return fetch(url)
.then(response => response.json())
.then(data => data.data)
.catch(error => console.log(error))
}
let minutoDondeAcaba = new Date ()
 minutoDondeAcaba.setMinutes(minutoDondeAcaba.getMinutes()+1)
 console.log(minutoDondeAcaba);

async function guardarDatosLocalStorage(){
    if(new Date() > minutoDondeAcaba){
        localStorage.removeItem("datosGuardados")
        console.log("Ya paso la hora");
     }
    const datosObtenidos = await obtenerId() 
    localStorage.setItem("datosGuardados", JSON.stringify(datosObtenidos))
    console.log(localStorage.getItem("datosGuardados"));
    const datosConvertidos = JSON.parse(localStorage.getItem("datosGuardados"))  
    
    let body = ''
    
    datosConvertidos.forEach(function(element){
        body += `<tr>
        <td class="col-sm align-middle" >${element.id}</td>
        <td class="col-sm align-middle">${element.first_name}</td>
        <td class="col-sm align-middle">${element.last_name}</td>
        <td class="col-sm align-middle">${element.email}</td>
        <td class="col-sm align-middle">
        <img class="rounded-circle img-fluid " src="${element.avatar}">  </img>
        </td> 
        </tr>`  
        
    })
    resultados.innerHTML=body
}

guardarDatosLocalStorage();
 
