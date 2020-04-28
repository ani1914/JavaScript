function solve(input) {
    let los = Number(input.shift());
    let name = input.shift();
    let name1 = 0;

    let zad = 0;
    let sum = 0;
    let broi = 0;
    while (name != "Enough" && zad < los) {
        let price = Number(input.shift());
        if (price <= 4) {
            zad += 1;
        }
        sum += price;
        broi += 1;
        name1 = name;
        name = input.shift();

    }
    if (name == "Enough") {
        let arrive = (sum / broi).toFixed(2);
        console.log(`Average score: ${arrive}`);
        console.log(`Number of problems: ${broi}`);
        console.log(`Last problem: ${name1}`);
    } else if (zad == los) {
        console.log(`You need a break, ${los} poor grades.`);

    }
}
solve([
    '3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'
]);