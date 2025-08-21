// 15. Sonni raqamlari yig‘indisi bo‘yicha baholash Funksiya son qabul qiladi. 
// Agar raqamlar yig‘indisi 10 dan kichik bo‘lsa "kichik", 10–20 oralig‘ida 
// bo‘lsa "o‘rtacha", 20 dan katta bo‘lsa "katta"
function checkDigitSum(N){
    let sumDigits = 0
    while(N > 0){
        let digit = N % 10
        sumDigits += digit
        N = Math.floor(N/10)
    }
    if(sumDigits < 10){
        return "kichik"
    }else if(sumDigits >= 10 && sumDigits < 20){
        return "o'rtacha"
    }else{
        return "katta"
    }
}
alert(checkDigitSum(583))