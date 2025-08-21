// fayl hajmi baytlar da berilgan undagi tuliq kilobaytini aniqlovchi programm

let bayt = Number(prompt("fayl hajmini kiriting (bayt) "))
let kb = Math.floor(bayt / 1024)
alert(`${bayt} bayt = ${kb} kb`)