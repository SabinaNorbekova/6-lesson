// ikki xonali son berilgan raqamlar o'rnini alishtirgan sonni aniql program

let num = Number(prompt("Ikki xonali son kiriting: "))
let un = Math.floor(num / 10)
let br = num % 10
let new_num = br * 10 + un
alert(`ushbu ikki xonali sonning raqamlar o'rni almashishidan hosil bo'lgan son: ${new_num}`)