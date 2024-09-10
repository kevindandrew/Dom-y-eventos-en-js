/* const nombre=document.querySelector("#name")
 nombre.addEventListener("input",cambia)

 function cambia() {
   if(nombre.value.length<10){
    nombre.classList.add("invalid")
   }else{
    nombre.classList.remove("invalid")
   } 
 } */

   const users = [
    {
       id:  1, 
       nombre: 'Ronnie',
       apellido: 'Santoyo'
    },
    {
       id:  2, 
       nombre: 'Augusto',
       apellido: 'Santoyo'
    },
    {
       id:  3, 
       nombre: 'William',
       apellido: 'Santoyo'
    },
    {
       id:  4, 
       nombre: 'Oliver',
       apellido: 'Santoyo'
    },
    {
       id:  5, 
       nombre: 'Harold',
       apellido: 'Santoyo'
    },
   
]
const caja=document.querySelector("#user_list")
   


   for (let i = 0; i < users.length; i++) {
   
        caja.innerHTML+="<li>"+users[i].nombre+"</li>"

    }

const boton=document.querySelector("#add_user")
const na=document.querySelector("#nombre")
const ape=document.querySelector("#apellido")
boton.addEventListener("click",agregar)

function agregar() {
        users.push({
            nombre: na.value,
            apellido : ape.value
        })
             caja.innerHTML+="<li>"+users[users.length-1].nombre+" "+users[users.length-1].apellido +"</li>"
}
     



   

  