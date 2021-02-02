function solve(input) {
    let name = input.shift();
    let j = 1;
    let total = 0;
    let i = 0;
    while (j <= 12) {
        let number = Number(input.shift());
        if (number >= 4.00) {
            total += number;


        } else if (number < 4.00) {
            i += 1;
            if (i <= 1) {
                total += number;

            } else
                console.log(`${name} has been excluded at ${j-1} grade`);
        }
        j++

    }
    let sum = (total / 12).toFixed(2);
    if (i <= 1)
        console.log(`${name} graduated. Average grade: ${sum}`);

}
solve([
    'Mimi', '5', '6',
    '5', '6', '5',
    '6', '6', '2',
    '3'
])