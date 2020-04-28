function solve(number, season) {
    number = Number(number);
    let destinetio = "";
    let type = "";
    let total = 0;
    if (number <= 100) {
        destinetio = "Bulgaria"
        if (season == "summer") {
            type = "Camp"
            total = number * 0.3;
        } else if (season == "winter") {
            type = "Hotel";
            total = number * 0.7
        }


    } else if (number <= 1000) {
        destinetio = "Balkans"
        if (season == "summer") {
            type = "Camp";
            total = number * 0.4;
        } else {
            type = "Hotel";
            total = number * 0.8;
        }

    } else if (number > 1000) {
        destinetio = "Europe"
        type = "Hotel";
        total = number * 0.9;

    }
    console.log(`Somewhere in ${destinetio}`);
    console.log(`${type} - ${total.toFixed(2)}`)

}
solve(75, "winter")