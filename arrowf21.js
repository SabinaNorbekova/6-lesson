// 21. Eng uzun so‘z Arrow function yozing. Satr qabul qiladi va ichidagi eng uzun so‘zni qaytaradi.

let findMaxSize = (str) => {
    let words = str.split(" ");
    let maxWord = words[0]
    for (let i = 0; i < words.length; i++){
        if(words[i].length >= maxWord.length){
            maxWord = words[i]
        }
    }
    return maxWord
};

alert(findMaxSize("Men JavaScriptni o'rganayapman"))


// namunada JavaScriptni eng uzun so'z deyilgan ekan ammo mantiqan o'rganayapman 13belgidan iborat shuning uchun natija o'rganayapman chiqyapti