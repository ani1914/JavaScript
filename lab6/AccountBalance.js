function solve(price) {


    let total = 0;
    let nubmer = Number(price.shift());

    let j = 1;
    while (j <= nubmer) {
        let price1 = Number(price.shift());
        if (price1 < 0) {
            console.log("Invalid operation!");
            break;

        }

        total = total + price1;
        console.log(`Increase: ${price1.toFixed(2)}`);


        j++;

    }
    console.log(`Total: ${total.toFixed(2)}`);

}
solve([3, 5.51, 69.42, 100])