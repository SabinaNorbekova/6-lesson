// 2. Sonni ikkilangan shaklga o‘tkazish N sonini while yordamida ikkilik sanoq sistemasiga o‘tkazing.

let N = Number(prompt("N = "))
let binary = ""
while (N > 0) {
    let q = N % 2
    binary = q + binary   
    N = Math.floor(N / 2) 
}
console.log(binary)
