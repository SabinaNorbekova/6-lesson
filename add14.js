// 3 xona li son berilgan o'ngdan 1-raqamni chapdan yozishdan hosil bo'lgan sonni aniql

let son = Number(prompt("3 xonali son kiriting: "))
let uch = Math.floor(son / 100)
let bir = son % 10
let un = Math.floor(son / 10 % 10)
let rightLeft = uch*10 + un + bir*100
alert(`o'ngdan 1-raqamni chapga qo'ysa: ${rightLeft}`)

