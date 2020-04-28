function solve(type, number, fib) {
    number = Number(number);
    fib = Number(fib);
    let total = 0;
    let total1 = 0;

    if (type == "Roses" && number <= 80) {
        total = 5 * number;
    } else if (type == "Roses" && number > 80) {
        total1 = 5 * number
        total = total1 - (total1 * 0.1);
    } else if (type == "Dahlias" && number <= 90) {
        total = 3.8 * number;
    } else if (type == "Dahlias" && number > 90) {
        total = (3.8 * number) - ((3.8 * number) * 0.15);
    } else if (type == "Tulips" && number <= 80) {
        total = 2.8 * number;
    } else if (type == "Tulips" && number > 80) {
        total = (2.8 * number) - ((2.8 * number) * 0.15);
    } else if (type == "Narcissus" && number >= 120) {
        total = 3 * number;
    } else if (type == "Narcissus" && number < 120) {
        total = (3 * number) + ((3 * number) * 0.15);
    } else if (type == "Gladiolus" && number >= 80) {
        total = (2.5 * number);
    } else if (type == "Gladiolus" && number < 80) {
        total = ((2.5 * number) + ((2.5 * number) * 0.20));
    }

    if (total <= fib) {
        let final = (fib - total).toFixed(2);
        console.log(`Hey, you have a great garden with ${number} ${type} and ${final} leva left.`);
    } else {
        let final2 = (total - fib).toFixed(2);
        console.log(`Not enough money, you need ${final2} leva more.`);
    }
}
solve("Gladiolus", 64, 160);