// 4. Raqamlar yig‘indisi juft/toqligini aniqlash N soni berilgan. 
// Raqamlar yig‘indisi juft bo‘lsa "Juft", aks holda "Toq" chiqaring.

let N = Number(prompt("N = "))
let n = Math.abs(Math.trunc(N)) 
let sumOfDigits = 0
do {
  let num = n % 10
  sumOfDigits += num
  n = Math.floor(n / 10)
} while(n > 0)
console.log(sumOfDigits % 2 === 0 ? "Juft" : "Toq")
