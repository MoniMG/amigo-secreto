// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear l
let listaAmigos = [];

// Función para agregar  un nuevo amigo 
function agregarAmigo (){
    let amigoAgregado = document.getElementById('amigo').value; // Lectura de elmento de entrada de textbox

    // Validación de nombre ingresado 
    if (amigoAgregado === "" ){
        alert ('Por favor ingresa un nombre válido');
        return;
        }

         // Validación de lista de amigos
    if (listaAmigos.includes(amigoAgregado) ){
        alert ('Por favor ingresa otro nombre válido');
        return;
        }

        // Amigo existente en la lista 
        const regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(amigoAgregado)) {
            alert("Nombre inválido. Solo se permiten letras.");
            return;
        }
    listaAmigos.push(amigoAgregado);
    console.log(listaAmigos); //Visualisación de lista de amigos 
}
  
