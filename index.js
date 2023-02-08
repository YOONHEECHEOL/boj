const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (hp) => {

    var answer = 0;
    
    let a, b, c;
    
    a = Math.floor(hp / 5);
    
    hp -= 5 * a;
    
    b = Math.floor(hp / 3);
    
    hp -= 3 * b;
    
    c = hp;

    console.log(a, b, c)
    
    answer = a + b + c;
    
    return answer;
}
  

console.log(solution(23)); // 5

