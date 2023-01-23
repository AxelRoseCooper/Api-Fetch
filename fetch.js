const boton = document.getElementById("post");
boton.addEventListener('click', guardarDatosLocalStorage);
let url = "https://reqres.in/api/users?delay=1";
const resultados = document.getElementById("dip")

function obtenerId(){
    return fetch(url)
    .then(a=> a.json())
    .then(b=>b.data)

}
let minutoDondeAcaba = new Date ()
 minutoDondeAcaba.setMinutes(minutoDondeAcaba.getMinutes()+1)
 console.log(minutoDondeAcaba);
 
async function guardarDatosLocalStorage(){
    if(new Date() > minutoDondeAcaba){
        localStorage.removeItem("datosGuardados")
        console.log("Ya paso la hora");
     }
    const datos = await obtenerId() 
    localStorage.setItem("datosGuardados", JSON.stringify(datos))
    console.log(localStorage.getItem("datosGuardados"));
    const datosConvertidos =  JSON.parse(localStorage.getItem("datosGuardados"))  
    
    let toHTML = ''
    
    datosConvertidos.forEach(function(element){
        toHTML += `<p>${element.id}</p><img src="${element.avatar}"></img> ` 

        
        
        
    })
    resultados.innerHTML=toHTML
}






