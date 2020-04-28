function solve(number) {
    let bonus = 0;
    number=Number(number);
    if (number <= 100) {
        bonus = 5;
    } else if (number < 1000)
        bonus = number * 0.2;
    else
        bonus = number * 0.1;

    if (number % 2 == 0) {
        bonus = bonus + 1;
    } else if (number % 10 == 5) {
        bonus = bonus + 2;
    }
    let total = number + bonus;
    console.log(bonus);
    console.log(total);
}
solve(20);