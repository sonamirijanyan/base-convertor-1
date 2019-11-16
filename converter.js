function convertToBinary(num){
  return num.toString(2);
}

function convertToHexa(num){

  if (num < 0) {
    num += 0xFFFFFFFF + 1;
  }

  return (num.toString(16).toUpperCase());
}

module.exports = {
  convertToBinary,
  convertToHexa
}