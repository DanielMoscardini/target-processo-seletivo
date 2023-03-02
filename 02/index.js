/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

let fib = num => {
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
  // console.log(arr);
  arr.includes(num)
    ? console.log('Valor existe na sequencia!\n')
    : console.log('Valor nao existe na sequencia!\n');
};

fib(5);
fib(10);
