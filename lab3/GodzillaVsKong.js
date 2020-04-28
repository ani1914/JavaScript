function solve(film, statist, stayl) {
    film = Number(film);
    statist = Number(statist);
    stayl = Number(stayl);
    let decor = film * 0.10;
    let price1 = (stayl * statist);


    if (statist > 150) {
        let price = price1 * 0.9

        let final = (decor + price);
        let total = (film - final).toFixed(2);
        let total1 = (final - film).toFixed(2);
        if (film >= final) {
            console.log("Action!")
            console.log(`Wingard starts filming with ${total} leva left.`)
        } else if (film < final) {
            console.log("Not enough money!")
            console.log(`Wingard needs ${total1} leva more.`)
        }

    } else {

        let final11 = (decor + price1);
        let total3 = (film - final11).toFixed(2);
        let total2 = (final11 - film).toFixed(2);
        if (film >= final11) {
            console.log("Action!")
            console.log(`Wingard starts filming with ${total3} leva left.`)
        } else if (film < final11) {
            console.log("Not enough money!")
            console.log(`Wingard needs ${total2} leva more.`)
        }

    }



}
solve(15437.62, 186, 57.99);