let count = 0;

for (let i = 1; i <= 200; i++) {
    if (i % 7 === 0) {
        count++;
    }
}

console.log("Count of numbers divisible by 7:", count);