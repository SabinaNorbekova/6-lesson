// 9. Kvadrat sonlar For yordamida 1 dan N gacha bo‘lgan mukammal kvadrat sonlarni chiqaring.

let N = Number(prompt("N = "))
for (let i = 1; i <= N; i++){
    if(i**2 <= N){
        console.log(i**2)
    }
}