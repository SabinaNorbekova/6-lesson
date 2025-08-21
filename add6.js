// ikki xonali son berilgan oldin o'nlar xonasidagi raqamni keyin birlar xonasidagi raqamni topuvchi dastur

let num = Number(prompt("Ikki xonali son kiriting: "))
let un = Math.floor(num / 10)
alert(`o'nlar xonasidagi raqam ${un}`)
let br = num % 10
alert(`birlar xonasidagi raqam ${br}`)