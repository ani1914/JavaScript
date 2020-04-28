function solve(solve) {
    let name = solve.shift();

    let i = 1;
    let total = 0;
    while (i <= 12) {
        let number = Number(solve.shift());
        if (number >= 4.00) {
            total += number;

            i++
        }

    }
    let sum = (total / 12).toFixed(2);;

    console.log(`${name} graduated. Average grade: ${sum}`);
}
solve([
    'Pesho', '4', '5.5',
    '6', '5.43', '4.5',
    '6', '5.55', '5',
    '6', '6', '5.43',
    '5', '6'
]);