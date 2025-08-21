// 19. Raqamlarni ko‘paytmasini topish Arrow function yozing. Son beriladi, uning raqamlari ko‘paytmasini qaytarsin.

let multi = (num) => {
    let multiply = 1
    while (num > 0){
        multiply *= num % 10
        num = Math.floor(num / 10)
    }
    return multiply
};

alert(multi(234))



// let multi = num => num.toString().split("").reduce((a,b) => a * b, 1);
// alert(multi(234)); // 24
