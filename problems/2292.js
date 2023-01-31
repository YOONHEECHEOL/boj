const solution = (param) => {

    let range = 1, block = 1;

    while (block < input) {    
    block += 6 * range;

    range++;
    }

    return range;
}