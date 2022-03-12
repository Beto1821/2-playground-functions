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
// eslint-disable-next-line complexity
function encode(frase) {
  for (i in frase) {
    if (frase[i] === 'a') {
      frase.replace('a', '1');
    }
    else if (frase[i] === 'e') {
      frase.replace('e', '2');
    }
    else if (frase[i] === 'i') {
      frase.replace('i', '3');
    }
    else if (frase[i] === 'o') {
      frase.replace('o', '4');
    }
    else if (frase[i] === 'u') {
      frase.replace('u', '5');
    }
  }
  return(frase);
}

// eslint-disable-next-line complexity
function decode(frase) {
  for (i in frase) {
    if (frase[i] === '1') {
      frase.replace('1', 'a');
    }
    else if (frase[i] === '2') {
      frase.replace('2', 'e');
    }
    else if (frase[i] === '3') {
      frase.replace('3', 'i');
    }
    else if (frase[i] === '4') {
      frase.replace('4', 'o');
    }
    else if (frase[i] === '5') {
      frase.replace('5', 'u');
    }
  }
}

// Desafio 10
function techList() {
  // seu código aqui
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
