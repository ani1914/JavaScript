function solve(mony, season, number) {
    mony = Number(mony);
    number = Number(number);
    let bord = 0;
    let total = 0;
    let final = 0;

    if (season == "Spring") {
        bord = 3000;

        if (number <= 6) {
            total = bord - (bord * 0.1);
        } else if (number > 7 && number <= 11) {
            total = bord - (bord * 0.15);
        } else if (number >= 12) {
            total = bord - (bord * 0.25);
        }
        if (number % 2 == 0) {
            final = total - (total * 0.05)
        } else
            final = total;

    } else if (season == "Summer") {
        bord = 4200;
        if (number <= 6) {
            total = bord - (bord * 0.1);
        } else if (number > 7 && number <= 11) {
            total = bord - (bord * 0.15);
        } else if (number >= 12) {
            total = bord - (bord * 0.25);
        }
        if (number % 2 == 0) {
            final = total - (total * 0.05)
        } else
            final = total;

    } else if (season == "Autumn") {
        bord = 4200;
        if (number <= 6) {
            total = bord - (bord * 0.1);
        } else if (number > 7 && number <= 11) {
            total = bord - (bord * 0.15);
        } else if (number >= 12) {
            total = bord - (bord * 0.25);
        }

        final = total;

    } else if (season == "Winter") {
        bord = 2600;
        if (number <= 6) {
            total = bord - (bord * 0.1);
        } else if (number > 7 && number <= 11) {
            total = bord - (bord * 0.15);
        } else if (number >= 12) {
            total = bord - (bord * 0.25);
        }
        if (number % 2 == 0) {
            final = total - (total * 0.05)
        } else
            final = total;

    }
    let ost = (mony - final);
    if (mony >= final) {
        console.log(`Yes! You have ${ost.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(ost*(-1)).toFixed(2)} leva.`)
    }



}
solve(3000, "Summer", 11)