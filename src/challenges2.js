/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// Desafio 11
function generatePhoneNumber(list) {
  let neg = 0;
  let cont = 0;
  if (list.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (i of list) {
    let rep = 0;
    for (z of list) {
      if (i === z) {
        rep += 1;
        if (rep > 2) {
          cont += 1;
        }
      }
    }
  }
  for (i of list) {
    if (list[i] < 0 || list[i] > 9) {
      neg += 1;
    }
  }
  if (neg > 0 || cont > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${list[0]}${list[1]}) ${list[2]}${list[3]}${list[4]}${list[5]}${list[6]}-${list[7]}${list[8]}${list[9]}${list[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  return a < b + c && b < a + c && c < a + b;
}

// Desafio 13
function hydrate(frase) {
  let soma = 0;
  let numbers = frase.match(/\d+/g);
  for (i of numbers) {
    soma += parseInt(numbers[i]);
  }
  if (numbers.length === 1) {
    return '1 copo de água';
  } return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
