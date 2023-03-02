let inverterStr = texto => {
  let string = texto;
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  arrReverso = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReverso.push(arr[i]);
  }

  stringReverse = arrReverso.join('');
  console.log(stringReverse);
};

inverterStr('Esta inverso!');
