// 12. Uchburchak shakli Nested for yordamida N ta satr bo‘yicha yulduzlardan uchburchak chizish.

let N = Number(prompt("N = "))
for (let i = 1; i <= N; i++){
    let row = ""
    for (let j = 1; j <= i; j++){
        row += "*"
    }   
    console.log(row)

}

