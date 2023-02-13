const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (numbers, k) => {

    var answer = 0;
    
    let l = [];
    
    let list = [...numbers];
    let cnt = 0;
    while(l.length < 3) {
        // console.log(list)
        // console.log(cnt);
        if(list[cnt]) {
            l.push(list[cnt]);
            cnt += 2;
        } else {
            list = [...list, ...numbers];
        }
    }
    
    console.log(l)
    console.log(l[k % 3])
    answer = l[k > 3 ? k % 3 - 1 : k - 1];
    return answer;

    
}
  

console.log(solution([1, 2, 3], 3)); // 1

