// 3 xona li son berilgan chapdan 1-raqamni o'ngdan yozishdan hosil bo'lgan sonni aniql

let son = Number(prompt("3 xonali son kiriting: "))
let uch = Math.floor(son / 100)
let bir = son % 10
let un = Math.floor(son / 10 % 10)
let leftRight = uch + un*100 + bir*10
alert(`chapdan 1-raqamni o'ngga qo'ysa: ${leftRight}`)

