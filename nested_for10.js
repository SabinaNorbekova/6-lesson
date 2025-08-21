// 10. Pascal uchburchagi Nested for yordamida N qatorlik Pascal uchburchagini chiqaring.
let N = Number(prompt("N = "))
let pascal = []
for (let i = 0; i < N; i++) {
    pascal[i] = []              
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            pascal[i][j] = 1      
        } else {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]  
        }
    }
    console.log(pascal[i].join(" "))
}
