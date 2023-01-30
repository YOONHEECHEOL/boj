const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const solution = (param) => {

    let answer = param.reduce((acc, curr) => {
        if(!acc.cnt[curr]) {
            acc.cnt[curr] = 1;
            acc.value[curr] = curr + ' ' + (1 / param.length * 100).toFixed(4);
        } else {
            acc.cnt[curr] = acc.cnt[curr] + 1;
            acc.value[curr] = curr + ' ' + (acc.cnt[curr] / param.length * 100).toFixed(4);
        }

        return acc;
    }, {cnt: {}, value: {}})
    
    return Object.values(answer.value).sort().join('\n');
}

const solution2 = (names) => {
    const dict = {};
    let total = 0;
    names.forEach((name) => {
      if (!dict[name]) dict[name] = 0;
      dict[name] += 1;
      total += 1;
    });
  
    return Object.keys(dict)
      .sort()
      .map((key) => `${key} ${((dict[key] / total) * 100).toFixed(4)}`)
      .join('\n');
  };

console.log(solution(input));

