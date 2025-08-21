// 13. Eng katta uch sonni topish Funksiya uchta son qabul qiladi va ulardan eng kattasini qaytaradi.

function findMaxOfThree(a, b, c){
    let max = a;
    if(b >= max){
        max = b;
    }else if(c >= max){
        max = c
    }
    return max
}
alert(findMaxOfThree(12, 45, 30))