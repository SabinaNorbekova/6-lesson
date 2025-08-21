// 3. Tub sonlarni chiqarish N soni berilgan. While yordamida 1 dan N gacha bo‘lgan tub sonlarni ekranga chiqaring.

let N = Number(prompt("N = "))
let i = 2
let tub = []
while (i <= N) {
    let isPrime = true
    let j = 2
    while (j <= Math.sqrt(i)) {
        if (i % j === 0) {
            isPrime = false
            break
        }
        j++
    }
    if (isPrime) {
        tub.push(i)
    }
    i++
}
console.log(tub)



// erotosfen g'alviri usuli:
// let N = Number(prompt("N = "))
// let prime = new Array(N + 1).fill(true)
// prime[0] = false
// prime[1] = false
// let i = 2
// while (i <= Math.sqrt(N)) {
//     if (prime[i]) {
//         let j = i * i
//         while (j <= N) {
//             prime[j] = false
//             j += i
//         }
//     }
//     i++
// }
// let k = 2
// while (k <= N) {
//     if (prime[k]) {
//         console.log(k)
//     }
//     k++
// }

