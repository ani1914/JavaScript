function trip(day, room, revu) {
    day = Number(day);
    let total = 0;
    let total1 = 0;
    let total2 = 0;
    if (day < 10 && room == "room for one person" && revu == "positive") {
        total = (day - 1) * 18;
        total2 = total + (total * 0.25);
        console.log((total2).toFixed(2));
    } else if (day < 10 && room == "room for one person" && revu == "negative") {
        total = (day - 1) * 18;
        total2 = total - (total * 0.1);
        console.log((total2).toFixed(2));
    } else if (day >= 10 && day <= 15 && room == "room for one person" && revu == "positive") {
        total = (day - 1) * 18;
        total2 = total + (total * 0.25);
        console.log((total2).toFixed(2));
    } else if (day >= 10 && day <= 15 && room == "room for one person" && revu == "negative") {
        total = (day - 1) * 18;
        total2 = total - (total * 0.1);
        console.log((total2).toFixed(2));
    } else if (day > 15 && room == "room for one person" && revu == "positive") {
        total = (day - 1) * 18;
        total2 = total + (total * 0.25);
        console.log((total2).toFixed(2));
    } else if (day > 15 && room == "room for one person" && revu == "negative") {
        total = (day - 1) * 18;
        total2 = total - (total * 0.1);
        console.log((total2).toFixed(2));
    } else if (day < 10 && room == "apartment" && revu == "positive") {
        total = (day - 1) * 25;
        total1 = total - (total * 0.3)
        total2 = total1 + (total1 * 0.25);
        console.log((total2).toFixed(2));
    } else if (day < 10 && room == "apartment" && revu == "negative") {
        total = (day - 1) * 25;
        total1 = total - (total * 0.3);
        total2 = total1 - (total1 * 0.1);
        console.log((total2).toFixed(2));
    } else if (day >= 10 && day <= 15 && room == "apartment" && revu == "positive") {
        total = (day - 1) * 25;
        total1 = total - (total * 0.35)
        total2 = total1 + (total1 * 0.25);
        console.log((total2).toFixed(2));
    } else if (day >= 10 && day <= 15 && room == "apartment" && revu == "negative") {
        total = (day - 1) * 25;
        total1 = total - (total * 0.35);
        total2 = total1 - (total1 * 0.1);
        console.log((total2).toFixed(2));
    } else if (day > 15 && room == "apartment" && revu == "positive") {
        total = (day - 1) * 25;
        total1 = total - (total * 0.5)
        total2 = total1 + (total1 * 0.25);
        console.log((total2).toFixed(2));
    } else if (day > 15 && room == "apartment" && revu == "negative") {
        total = (day - 1) * 25;
        total1 = total - (total * 0.50);
        total2 = total1 - (total1 * 0.1);
        console.log((total2).toFixed(2));
    } else if (day < 10 && room == "president apartment" && revu == "positive") {
        total = (day - 1) * 35;
        total1 = total - (total * 0.1)
        total2 = total1 + (total1 * 0.25);
        console.log((total2).toFixed(2));
    } else if (day < 10 && room == "president apartment" && revu == "negative") {
        total = (day - 1) * 35;
        total1 = total - (total * 0.1);
        total2 = total1 - (total1 * 0.1);
        console.log((total2).toFixed(2));
    } else if (day >= 10 && day <= 15 && room == "president apartment" && revu == "positive") {
        total = (day - 1) * 35;
        total1 = total - (total * 0.15)
        total2 = total1 + (total1 * 0.25);
        console.log((total2).toFixed(2));
    } else if (day >= 10 && day <= 15 && room == "president apartment" && revu == "negative") {
        total = (day - 1) * 35;
        total1 = total - (total * 0.15);
        total2 = total1 - (total1 * 0.1);
        console.log((total2).toFixed(2));
    } else if (day > 15 && room == "president apartment" && revu == "positive") {
        total = (day - 1) * 35;
        total1 = total - (total * 0.2)
        total2 = total1 + (total1 * 0.25);
        console.log((total2).toFixed(2));
    } else if (day > 15 && room == "president apartment" && revu == "negative") {
        total = (day - 1) * 35;
        total1 = total - (total * 0.2);
        total2 = total1 - (total1 * 0.1);
        console.log((total2).toFixed(2));
    }

}
trip(14, "apartment", "positive");