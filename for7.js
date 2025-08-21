// 7. Armstrong sonlarini topish 1 dan N gacha bo‘lgan Armstrong sonlarni for orqali toping. 
// (Armstrong son — raqamlarining kubi yig‘indisi o‘ziga teng, masalan: 153 = 1³+5³+3³).
let N = Number(prompt("N = "))
for (let i = 1; i <= N; i++) {
    let armst = 0
    for (let j = i; j > 0; j = Math.floor(j / 10)) {
        let num = j % 10
        armst += num * num * num
    }
    if (armst === i) {
        console.log(i)
    }
}


