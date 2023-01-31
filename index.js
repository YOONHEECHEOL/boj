const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (param) => {

    let range = 1, block = 1;

    while (block < input) {    
    block += 6 * range;

    range++;
    }

    return range;
}
  

console.log(solution(input));

