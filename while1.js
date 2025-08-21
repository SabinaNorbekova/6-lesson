// 1. Eng katta raqamni topish N soni berilgan. While yordamida uning eng katta raqamini toping.

let N = Number(prompt("N = "))
let max = 0
while(N > 0 ){
    let raqam = N%10
    if (raqam > max){
        max = raqam
    }
    N = Math.floor(N/10)
}
console.log(max)