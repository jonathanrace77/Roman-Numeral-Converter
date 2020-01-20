function convertToRoman(num) {
 let newArray = [];
 let numeralNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 let numeralLetter = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
 let i;
for(i=0; i<13; i++){
  while(num >= numeralNumber[i]){
       num = num - numeralNumber[i];
       newArray.push(numeralLetter[i]);
   }  
} 
 return newArray.join().replace(/[,]/g, "");;
}
