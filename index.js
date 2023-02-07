const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (dot) => {

    if(dot[0] > 0 && dot[1] > 0) return 1;
    if(dot[0] < 0 && dot[1] > 0) return 2;
    if(dot[0] < 0 && dot[1] < 0) return 3;
    if(dot[0] > 0 && dot[1] < 0) return 4;

}
  

console.log(solution([2, 4]));	// 1, [x,y]




