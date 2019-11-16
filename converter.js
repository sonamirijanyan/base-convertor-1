function convertToBinary(num){
  console.log(num.toString(2));
}

function convertToHexa(num){

  if (num < 0) {
    num += 0xFFFFFFFF + 1;
  }
  console.log(num.toString(16).toUpperCase());
}

module.exports = {
  convertToBinary,
  convertToHexa
}