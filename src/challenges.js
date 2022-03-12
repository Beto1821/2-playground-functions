/* eslint-disable no-else-return */
/* eslint-disable object-shorthand */
/* eslint-disable guard-for-in */
/* eslint-disable brace-style */
/* eslint-disable no-undef */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(list) {
  return `${list[list.length - 1]}, ${list[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(list) {
  let maior = list[0];
  let cont = 0;
  for (i in list) {
    if (list[i] > maior) {
      maior = list[i];
    }
  }
  for (z in list) {
    if (list[z] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  // eslint-disable-next-line no-else-return
  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(list) {
  for (i in list) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      list[i] = 'fizzBuzz';
    } else if (list[i] % 3 === 0) {
      list[i] = 'fizz';
    } else if (list[i] % 5 === 0) {
      list[i] = 'buzz';
    } else {
      list[i] = 'bug!';
    }
  }
  return list;
}

// Desafio 9

function encode(frase) {
  for (i of frase) {
    frase = frase.replace('a', '1');
    frase = frase.replace('e', '2');
    frase = frase.replace('i', '3');
    frase = frase.replace('o', '4');
    frase = frase.replace('u', '5');
  }
  return frase;
}

// eslint-disable-next-line complexity
function decode(frase) {
  for (i in frase) {
    frase = frase.replace('1', 'a');
    frase = frase.replace('2', 'e');
    frase = frase.replace('3', 'i');
    frase = frase.replace('4', 'o');
    frase = frase.replace('5', 'u');
  }
  return frase;
}

// Desafio 10
function techList(list, name) {
  let saida = [];
  list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  } else {
    for (i in list) {
      saida.push({ tech: list[i], name: name });
    }
  }

  return saida;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
