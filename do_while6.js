// 6. Raqamlar sonini hisoblash N soni berilgan. Do while orqali raqamlar sonini toping.
let N = Number(prompt("N = "))
let countDigits = 0
do {
  countDigits += 1 
  N = Math.floor(N/10)
} while(N > 0)
console.log(countDigits)
