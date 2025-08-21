// uzunlik sm da berilgan undagi metrlar sonini aniqlovchi programm

let length_sm = Number(prompt("uzunlikni kiriting (sm) "))
let length_m = Math.floor(length_sm / 100)
alert(`${length_sm} sm = ${length_m} metr`)