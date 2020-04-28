function solve(eks, paz, kuk, mech, min, kam) {
    let Ppaz = 2.6;
    let Pkuk = 3;
    let Pmech = 4.10;
    let Pmin = 8.20;
    let Pkam = 2;

    let total = paz * Ppaz + kuk * Pkuk + mech * Pmech + min * Pmin + kam * Pkam;


    let broi = paz + kuk + mech + min + kam;

    if (broi >= 50) {
        let total1 = total - (total * 0.25);
        let sum = total1 - (total1 * 0.1);
        let final = (sum - eks).toFixed(2);
        if (final >= 0)
            console.log(`Yes! ${final} lv left.`);
        else
            console.log(`Not enough money! ${(-1)*final} lv needed.`);
    } else {
        let sum1 = total - (total * 0.1);
        let final1 = (sum1 - eks).toFixed(2);
        if (final1 >= 0) {
            console.log(`Yes! ${final1} lv left.`);
        } else
            console.log(`Not enough money! ${final1*(-1)} lv needed.`);
    }
}
solve(320, 8, 2, 5, 5, 1);