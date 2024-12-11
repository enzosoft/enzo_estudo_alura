const texto1 = "Olá Mundo!";
const texto2 = 'Olá Mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const MeuNome = "Leonardo";

// concatenação (+

console.log(citacao + MeuNome)

// transformação/conversão do código UNICODE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// string na prática

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input1.toLowerCase();

console.log(cidade1 === inputMinusculo); // true

// utilizando a propriedade LENGTH

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres



// template string OU template literal

