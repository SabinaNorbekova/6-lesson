// 18. Sonlarning o‘rtacha qiymatini hisoblash Expression function massiv qabul qiladi va o‘rtachasini qaytaradi.

let urta = function (arr){
    let sum = 0 
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

alert(urta([10, 20, 30, 40]))