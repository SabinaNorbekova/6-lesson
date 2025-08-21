// 9. Karraliklar yig‘indisi N soni berilgan. 1 dan N gacha bo‘lgan sonlardan 
// faqat 3 va 5 ga bo‘linadiganlarini yig‘indisini hisoblang.

let N = Number(prompt("N = "))
let sum = 0
for (let i = 1; i < N; i++){
    if(i%3==0||i%5==0){
        sum+=i
    }
}
console.log(sum)