function solve(inputone, type, rating) {
    let days = Number(inputone);
    let nights = days - 1;
    let finalprice = 0;

    if (type == 'room for one person') {
        finalprice = nights * 18;
    } else if (type == 'apartment') {
        finalprice = nights * 25;
    } else if (type == 'president apartment') {
        finalprice = nights * 35;
    }

    let discount = 0;

    switch (type) {
        case 'apartment':
            if (days < 10) {
                discount = 0.3 * finalprice;
            } else if (days <= 15) {
                discount = 0.35 * finalprice;
            } else {
                discount = 0.5 * finalprice;
            }
            break;
        case 'president apartment':
            if (days < 10) {
                discount = 0.1 * finalprice;
            } else if (days <= 15) {
                discount = 0.15 * finalprice;
            } else {
                discount = 0.2 * finalprice;
            }
            break;
    }

    let priceToPay = finalprice - discount;

    if (rating == 'positive') {
        priceToPay = 1.25 * priceToPay;
    } else if (rating == 'negative') {
        priceToPay = priceToPay - (0.1 * priceToPay);
    }

    console.log(priceToPay.toFixed(2));
}
solve(12, "room for one person", "positive")