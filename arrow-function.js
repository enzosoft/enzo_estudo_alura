function apresentar(nome){
    return `meu nome é ${nome}`
}

// Arrow function
// const apresentarArrow = nome => `meu nome é ${nome}`;
// const soma = (num1, num2) => num1 + num2;

//Arrow function com + 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente número de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1, 1))

// Hoisting: arrow function se comporta como expressão

//operador maior ou igual que
// >=