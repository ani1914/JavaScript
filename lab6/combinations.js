function solve(input) {
    let number = Number(input.shift());
    let combo = 0;
    let total = 0;
    for (i = 0; i <= number; i++) {
        for (j = 0; j <= number; j++) {
            for (k = 0; k <= number; k++) {
                total = i + j + k;
                if (total == number)
                    combo += 1;
            }
        }
    }
    console.log(combo);
}
solve(['25']);