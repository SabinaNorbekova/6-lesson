// 3 xonali son berilgan avval birliklar xonasidagi raqamni keyin o'nliklar xonasidagi raqamni topuvchi program

let son = Number(prompt("3 xonali son kiriting: "))
let bir = son % 10
alert(`ushbu sonning birlar xonasidagi raqami: ${bir}`)
let un = Math.floor(son / 10 % 10)
alert(`ushbu sonning o'nlar xonasidagi raqami: ${un}`)
