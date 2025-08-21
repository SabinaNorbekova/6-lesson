// 14. Satr uzunligini tekshirish Funksiya satr qabul qiladi. Agar uzunligi juft bo‘lsa 
// "Juft uzunlik", toq bo‘lsa "Toq uzunlik" qaytaradi.

function checkStringLength(str){
    if(str.length % 2 == 0){
        alert("Juft uzunlik")
    }else{
        alert("Toq uzunlik")
    }
}
alert(checkStringLength("hello"))