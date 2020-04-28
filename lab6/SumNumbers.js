function solve(sume) {
    let number = sume.shift();
    let sum = 0;
    while (number != "Stop") {
        number = Number(number);
        sum = sum + number;
        number = sume.shift();
    }
    console.log(sum)
}
solve(['10', '20', '30', '45', 'Stop'])
