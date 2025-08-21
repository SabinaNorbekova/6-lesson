// 16. Parolni tekshirish Funksiya expression sifatida yozilsin. 
// Parol kamida 8 belgidan iborat bo‘lsa "Yaroqli parol", aks holda "Yaroqsiz parol".

let checkPassword = function(str){
    if(str.length >= 8){
        return "Yaroqli parol"
    }else{
        return "Yaroqsiz parol"
    }
}

alert(checkPassword("abcd1234"))