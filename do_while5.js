// 5. Fibonachchi ketma-ketligi Do while orqali N gacha bo‘lgan Fibonachchi sonlarini chiqarish.

let N = Number(prompt("N = "))
let fibs = []
let a = 0, b = 1 
do {
  fibs.push(a)     
  let temp = a + b 
  a = b            
  b = temp
} while(a <= N)    
console.log(fibs)
