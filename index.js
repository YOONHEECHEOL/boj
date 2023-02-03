const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (l, m) => {

    const euclid = (a, b) => {
        // a가 큰 수, b가 작은 수
        let max = 0;
    
        let r = a % b;
        if(r === 0) return b;
        if(r !== 0) {
            return euclid(b, r);
        }
    }

    let answer = euclid(l, m);
    return answer;
}
  

console.log(solution(12, 8));

