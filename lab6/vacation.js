function solve(input) {
    let needMony = Number(input.shift());
    let speedMony = Number(input.shift());

    let day = 0;
    let neg = 0;

    while (speedMony != needMony && neg != 5) {
        let type = input.shift();
        let mony = Number(input.shift());
        if (type == "spend") {
            speedMony = speedMony - mony;
            if (speedMony <= 0) {
                speedMony = 0;
            }
            neg += 1;
        } else if (type = "save") {
            speedMony = speedMony + mony;
        }
        day += 1;
    }
    if (speedMony == needMony) {
        console.log(`You saved the money for ${day} days.`)
    } else if (neg == 5) {
        console.log(`You can't save the money.`);
        console.log(`${day}`);
    }
}
solve(['2000', '1000', 'spend', '1200', 'save', '2000'])