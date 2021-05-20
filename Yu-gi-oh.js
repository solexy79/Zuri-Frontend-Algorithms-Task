function checkYuGiOh(n) {
  //create an empty array
  let arr = [];
  //convert to number
  let nNum = Number(n);
  //if it can not be converted then do this
  if (isNaN(nNum)) {
    return `Invalid parameter: ${n}`;
  }
  //if it is a number then do this
  for (let i = 1; i <= nNum; i++) {
    if (i % 30 === 0) {
      arr.push("yu-gi-oh");
    } else if (i % 15 === 0) {
      arr.push("gi-oh");
    } else if (i % 10 == 0) {
      arr.push("yu-oh");
    } else if (i % 6 === 0) {
      arr.push("yu-gi");
    } else if (i % 2 === 0) {
      arr.push("yu");
    } else if (i % 3 === 0) {
      arr.push("gi");
    } else if (i % 5 === 0) {
      arr.push("oh");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(checkYuGiOh(10));
