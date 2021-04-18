//Exercício 1

function inverteArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  let arrayFinal = [];
  for (let x of array) {
    if (x % 2 === 0) {
      arrayFinal.push(x * x);
    }
  }
  return arrayFinal;
}

//Exercício 3

function retornaNumerosPares(array) {
  let evenNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenNumber.push(array[i]);
    }
  }
  return evenNumber;
}

//Exercício 4

function retornaMaiorNumero(array) {
  let valorMaximo = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > valorMaximo) {
      valorMaximo = array[i];
    }
  }
  return valorMaximo;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  const arr = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    (!booleano1 && !booleano3) || (!booleano4 && booleano3 && booleano3),
  ];

  return arr;
}

//Exercício 7

function retornaNNumerosPares(n) {
  let evenNumberN = [];
  for (let index = 0; evenNumberN.length < n; index++) {
    if (index % 2 == 0) {
      evenNumberN.push(index);
    }
  }
  return evenNumberN;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a == b && b == c) {
    return "Equilátero";
  } else if (a !== b && b !== c && a !== c) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let majorNumber;
  let majorDivisibleByMinor;
  let subtraction;

  if (num1 > num2 && num1 % num2 === 0) {
    majorNumber = num1;
    majorDivisibleByMinor = true;
    subtraction = num1 - num2;
  } else if (num2 > num1 && num2 % num1 === 0) {
    majorNumber = num2;
    majorDivisibleByMinor = true;
    subtraction = num2 - num1;
  } else if (num1 > num2 && num1 % num2 !== 0) {
    majorNumber = num1;
    majorDivisibleByMinor = false;
    subtraction = num1 - num2;
  } else if (num2 > num1 && num2 % num1 !== 0) {
    majorNumber = num2;
    majorDivisibleByMinor = false;
    subtraction = num2 - num1;
  }

  return {
    maiorNumero: majorNumber,
    maiorDivisivelporMenor: majorDivisibleByMinor,
    diferenca: subtraction,
  };
}

// Exercício 10

function segundoMaiorEMenor(array) {
  // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {

  // USING SORT
  // return array.sort(function (a, b) {
  //   return a - b;
  // });



  // USING STACKOVERFLOW
  // -----------------------------------------
  // let order = false;
  // while (!order) {
  //   order = true;
  //   for (let i = 1; i < array.length; i += 1) {
  //     if (array[i - 1] > array[i]) {
  //       order = false;
  //       const increasing = array[i - 1];
  //       array[i - 1] = array[i];
  //       array[i] = increasing;
  //     }
  //   }
  // }
  // return array;



  // JOIN INFORMATION FOUND
  // ----------------------------------------
  let increasing = [];
  let position = 0;
  let maximumValue = array[0];
  let minimumValue = array[0];

  for (let i = 0; i < array.length; i++) {
    if (maximumValue < array[i]) {
      maximumValue = array[i];
    }
  }

  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] != null) {
        if (minimumValue > array[k]) {
          minimumValue = array[k];
          position = k;
        }
      }
    }
    increasing[j] = minimumValue;
    array[position] = null;
    minimumValue = maximumValue;
  }
  return increasing;
}

// Exercício 12

function filmeFavorito() {
  // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
  // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
  // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
  // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
  // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
