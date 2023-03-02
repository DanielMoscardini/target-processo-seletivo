/*
Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____
*/

// a)
let a = arrayNum => {
  let impares = [];
  for (let i = 0; i < arrayNum.length; i++) {
    if (i % 2 == 0) {
      impares.push(arrayNum[i]);
    }
  }
  console.log(impares);
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a(numeros);

// b)
let b = num => {
  let atual = num;
  let dobro = 0;
  for (let i = 0; i < 7; i++) {
    dobro = atual * 2;
    atual = dobro;
    console.log(atual);
  }
};

// b(1);

// c)
let c = num => {
  for (let i = 0; i <= 9; i++) {
    num = Math.pow(i, 2);
    console.log(num);
  }
};
// c(1);

// e)
let e = num => {
  let n1 = 0;
  let n2 = 1;
  let proxTermo;
  let arr = [0, 1];
  console.log(n1);
  console.log(n2);
  proxTermo = n1 + n2;

  while (proxTermo <= num) {
    console.log(proxTermo);
    n1 = n2;
    n2 = proxTermo;
    arr.push(proxTermo);
    proxTermo = n1 + n2;
  }
};

e(5);
