for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("TwoThree");
    } else if (i % 2 === 0) {
        console.log("Two");
    } else if (i % 3 === 0) {
        console.log("Three");
    } else {
        console.log(i);
    }
}// 1.Replace Multiples (Two, /Three/ TwoThree )
 //2.Armstrong Numbers


let num = 153;
let original = num;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}

// count Vowels in a String

let str = "Hello World";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++;
    }
}

console.log("Number of vowels:", count);