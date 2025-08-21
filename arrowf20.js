// 20. Perfect Number Arrow function yozing. Agar son mukammal son bo‘lsa true, aks holda false. 
// Mukammal son — o‘zidan tashqari 
// bo‘luvchilari yig‘indisi o‘ziga teng bo‘lgan son. (Masalan: 6, 28).

let perfectNum = (num) => {
    let buluvchilar = []
    for (let i = 1; i < num; i++){
        if(num % i == 0){
            buluvchilar.push(i)
        }
    }
    let sum = 0
    for (let j = 0; j < buluvchilar.length; j++){
        sum += buluvchilar[j]
    }
    return sum == num
};

alert(perfectNum(28))



//  tezroq ishlaydi:
// function isPerfectNumber(n) {
//     let sum = 0;
//     for (let i = 1; i <= n / 2; i++) {
//       if (n % i === 0) {
//         sum += i;
//       }
//     }
//     return sum === n;
//   }
  
//   console.log(isPerfectNumber(6));   // true
//   console.log(isPerfectNumber(28));  // true
//   console.log(isPerfectNumber(12));  // false
  