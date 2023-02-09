const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (balls, share) => {

    function factorial(n) {
        let result = BigInt(1);
        for (let i = 1; i <= n; i++) {
            result *= BigInt(i);
        }
        return result;
    }
    
    function s(balls, share) {
        return factorial(balls) / (factorial(share) * factorial(balls - share));
    }

    return s(balls, share);
}
  

console.log(solution(30, 29)); // 1

