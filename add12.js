// 3 xona li son berilgan raqamlari teskari taribdagi sonni aniql

let son = Number(prompt("3 xonali son kiriting: "))
let uch = Math.floor(son / 100)
let bir = son % 10
let un = Math.floor(son / 10 % 10)
let teskari = uch + un*10 + bir*100
alert(`raqamlari teskari tartibda: ${teskari}`)

