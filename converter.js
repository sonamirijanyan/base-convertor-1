function convertToBase(num, base){

  if (num < 0) {
    num += 0xFFFFFFFF + 1;
  }

  let arr = [];
  let count = -1;
  let vals = ["A", "B", "C", "D", "E", "F"];

  for(let i = num; i > 0; i = Math.floor(i / base)){
    if(i % base >= 10) {
      arr.push(vals[i % base - 10]);
    } else {
      arr.push(i % base);
    }
    count += 1;
  }
let result = '';
  for (let j = count; j >= 0; j--) {
    result += arr[j];
  }
  return result;
}

module.exports = {
  convertToBase
}