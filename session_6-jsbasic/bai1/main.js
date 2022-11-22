// var firstNum = prompt("Điền vào số thứ nhất : ");
// var secondNum = prompt("Điền vào số thứ hai : ");
// var sum = Number(firstNum) + Number(secondNum);
// console.log(alert(sum.toString()))

var num = (prompt("Điền vào số cần kiểm tra; "));
var ok = 1;
var res = num;
while(num.length >0){
   var  n = num.length ;
    if(num.charAt(0) !='6' && num.charAt(0)!=8){
        ok=0;
    }
    num = num.slice(1);
}
if(ok == 1){
    console.log(alert(res.toString()+ " là số lộc phát"));
}
if(ok == 0) {
  console.log(alert(res.toString() + " không là số lộc phát"));
}

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });