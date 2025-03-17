// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear l
let amigos = [];

// Función para agregar  un nuevo amigo 
function agregarAmigo (){
    let amigoAgregado = document.getElementById('amigo').value; // Lectura de elmento de entrada de textbox
    // Validación de nombre ingresado 

    if (amigoAgregado === "" ){
        alert ("Por favor, inserte un nombre");
        }
   else {
        amigos.push(amigoAgregado); //Agrega el nombre al array
        console.log(amigos); //Visualisación de lista de amigos 
        document.querySelector('#amigo').value = ''; // Limpia el campo de entrada
        actualizarLista(); // Actualiza la lista de amigos HTML
    
   }              
}


//Implementa una función para actualizar la lista de amigos
function actualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML= ""; // Limpia la lista

    for(let i= 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


// Implementa una función para sortear los amigos
function sortearAmigo(){

    //Validar que haya amigos disponibles:
    if (amigos.length===0){
        alert ("No hay amigos en la lista de Amigos, ingresa por lo menos 2 nombres");
        return;
    }
  // Genera indice aleatorio 
    let indice =  Math.floor(Math.random()*amigos.length);  
        
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indice];

    // Mostrar el resultado:
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `El amigo secreto es: ${amigoSorteado}`;

}

function reiniciarJuego(){
    console.log ("Reinicia");
    listaAmigos.innerHTML= ""; // Limpia la lista
    amigos = [];
    resultado.innerHTML="";

}