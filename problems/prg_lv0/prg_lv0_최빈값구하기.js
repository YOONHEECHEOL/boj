 // if(arr.length === 0) return 0;

    // let a = arr.reduce((acc, curr) => {

    //     if(acc.chked.includes(curr)) {
    //         acc.val = acc.val.map(i => {
    //             if(i.v === curr) {
    //                 i.cnt += 1;
    //                 return i;
    //             } else return i;
    //         })
    //         return acc;
    //     } else {
    //         acc.chked.push(curr);
    //         acc.val.push({v: curr, cnt: 1});
    //         return acc;
    //     }
        
    // }, {val: [], chked: []})   
    
    // a = a.val.sort((l, m) => m.cnt - l.cnt);

    // if(a.length > 1 && a[0].cnt === a[1].cnt) return -1
    // else return a[0].cnt;

    // let answer = [];
    

    //--------
    // let chk = [];
    // arr.forEach(x => {
    //     if(!chk.includes(x)) chk.push(x);
    // })

    // chk.forEach(i => {
    //     let cnt = 0;
    //     arr.forEach(j => {
    //         if(i === j) cnt += 1;
    //     })
    //     answer.push(cnt);
    // })

    // answer = answer.sort((a, b) => b - a)
    
    // if(answer.length === 1 || answer[0] !== answer[1]) return answer[0]
    // else return -1

    // 최빈값은 가장 많이 나온 수(몇번 나온건지 아님)!
    let answer = arr.reduce((acc, curr) => {
        
        if(acc[curr]) acc[curr] += 1
        else acc[curr] = 1;

        if(acc.max < acc[curr]) {
            acc.max = acc[curr];
            acc.maxKey = curr;
        }

        return acc;

    }, {max: 0, maxKey: ''})

    let cnt = 0;
    for(const [key, val] of Object.entries(answer)) {
        if(val === answer.max && key !== 'max' && key !== 'maxKey') cnt++;
    }

    if(cnt !== 1) return -1
    else return answer.maxKey;