// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = '456';

console.log(numero == numeroString)
console.log(numero + numeroString)

// conversão explícita

//Number()
console.log(numero + Number(numeroString))

//String()
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // String “12341234” 

let usuarioConectado = false;
console.log(usuarioConectado); // Boolean = false
usuarioConectado = true;
console.log(String(usuarioConectado)); // Teremos a conversão da booleana para string “true”.

