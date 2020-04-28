function solve(monat, day) {
    day = Number(day);

    let total1 = 0;
    let total2 = 0;

    if (monat == "May" || monat == "October") {
        total1 = day * 50;
        total2 = day * 65;
        if (day > 7 && day <= 14) {
            total1 = total1 - (total1 * 0.05);
        } else if (day > 14) {
            total1 = total1 - (total1 * 0.3);
            total2 = total2 - (total2 * 0.1);
        }
    } else if (monat == "June" || monat == "September") {
        total1 = day * 75.20;
        total2 = day * 68.70;
        if (day > 14) {
            total1 = total1 - (total1 * 0.2);
            total2 = total2 - (total2 * 0.1);
        }
    } else if (monat == "July" || monat == "August") {
        total1 = day * 76;
        total2 = day * 77;
        if (day > 14) {
            total2 = total2 - (total2 * 0.1);
        }
    }
    console.log(`Apartment: ${total2.toFixed(2)} lv.`);
    console.log(`Studio: ${total1.toFixed(2)} lv.`);
}
solve("May", 15);