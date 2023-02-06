const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (arr) => {

    let a = arr.reduce((acc, curr) => {

        if(acc.chked.includes(curr)) {
            acc.val = acc.val.map(i => {
                if(i.v === curr) {
                    i.cnt += 1;
                    return i;
                } else return i;
            })
            return acc;
        } else {
            acc.chked.push(curr);
            acc.val.push({v: curr, cnt: 1});
            return acc;
        }
        
    }, {val: [], chked: []})   
    
    a = a.val.sort((l, m) => m.cnt - l.cnt);

    if(a[0].cnt === a[1].cnt) return -1
    else return a[0].cnt;

}
  

console.log(solution([1, 1, 2, 2]));