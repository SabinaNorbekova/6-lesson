// 3 xonali son berilgan uning raqamlari yig' aniql programm

let son = Number(prompt("3 xonali son kiriting: "))
let uch = Math.floor(son / 100)
let bir = son % 10
let un = Math.floor(son / 10 % 10)
let sumDigit = uch + un + bir
alert(`ushbu 3 xonali sonning raqamlar yig'indisi: ${sumDigit}`)

