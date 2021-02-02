function solve(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let magicNum = Number(input.shift());
    let total = 0;
    let combo = 0;
    let fn = 0;
    let fs = 0;
    let finish = false;
    for (i = firstNum; i <= secondNum; i++) {
        fn = i;
        for (j = firstNum; j <= secondNum; j++) {
            fs = j;
            combo += 1;
            total = i + j;
            if (total == magicNum) {
                finish = true;
                break;
            }
        }
        if (finish) {
            break;
        }
    }
    if (finish) {
        console.log(`Combination N:${combo} (${fn} + ${fs} = ${magicNum})`);
    } else {
        console.log(`${combo} combinations - neither equals ${magicNum}`)
    }
}
solve(['1', '10', '5']);