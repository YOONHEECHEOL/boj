    // euclid 
    // l - 최대공약수
    // m - 최소공배수

    let x = n < 6 ? 6 : n;
    let y = n > 6 ? 6 : n;

    console.log(x, y)

    let a = x;
    let b = y;

    let r = a % b;
    console.log(r)
    while(a % b !== 0) {
        r = a % b;
        console.log('r = ' +  r)
        if(r !== 0) {
            a = b;
            b = r;
        }
    }
    // r - 최대공약수
    console.log(r)
    if(r === 0) r = y;

    return ((x * y) / r) / 6;