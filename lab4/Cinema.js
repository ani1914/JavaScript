function solve(type, r, c) {
    r = Number(r);
    c = Number(c);
    let total = 0;
    if (type == "Premiere") {
        total = 12.0 * r * c;

    } else if (type =="Normal") {
        total = 7.50 * r * c;

    } else if (type == "Discount") {
        total = 5.00 * r * c;

    }
    console.log(`${(total).toFixed(2)} leva`);

}
solve("Normal", 21, 13);