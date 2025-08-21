// 17. Palindrom son Expression function yozing. Agar son teskari yozilganda ham o‘sha son bo‘lsa true, aks holda false.

let isPalindrome = function (num){
    let new_num = ""
    let caskad = num
    while(caskad > 0){
        n = caskad % 10
        new_num += String(n)
        caskad = Math.floor(caskad / 10)
    }
    if (new_num == num){
        return "true"
    } else{
        return "false"
    }
}
alert(isPalindrome(121))
alert(isPalindrome(123))
