// 3 xona li son berilgan o'nlar va yuzlar xonasidagi raqamni alisht hosil bo'lgan sonni aniql

let son = Number(prompt("3 xonali son kiriting: "))
let uch = Math.floor(son / 100)
let bir = son % 10
let un = Math.floor(son / 10 % 10)
let unYuz = uch*10 + un*100 + bir
alert(`o'nlar va yuzlar raqami almashsa: ${unYuz}`)

