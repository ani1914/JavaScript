function solve(number) {
    let total = Number(number.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let j = 1;
    while (j <= total) {
        let num1 = Number(number.shift());
        if (maxNumber < num1) {
            maxNumber = num1;

        }
        j++
    }
    console.log(maxNumber);
}
solve(['2', '100', '99'])