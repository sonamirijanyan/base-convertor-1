const reader = require('readline-sync');
const {convertToBase} = require('./converter');

const num = reader.questionInt("Please enter the number you want to convert = ");
const opt = reader.questionInt("Please enter option: \n 1:Binary \n 2:Hexadecimal \n");

if(opt === 1){
  console.log(convertToBase(num, 2));
}else if(opt === 2){
  console.log(convertToBase(num, 16));
}else{
  console.log("Imported value should be number");
}