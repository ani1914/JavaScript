function solve(type, sity, number) {
    number = Number(number);


    if (sity == "Sofia") {
        if (type == "coffee") {
            let type1 = 0.5;
            let total = number * type1;
            console.log(total);
        } else if (type == "water") {
            let type1 = 0.8;
            let total = number * type1;
            console.log(total);
        } else if (type == "beer") {
            type1 = 1.20;
            total = number * type1;
            console.log(total);
        } else if (type == "sweets") {
            type1 = 1.45;
            total = number * type1;
            console.log(total);
        } else if (type == "peanuts") {
            type1 = 1.60;
            total = number * type1;
            console.log(total);
        }
    } else if (sity == "Plovdiv") {
        if (type == "coffee") {
            let type1 = 0.4;
            let total = number * type1;
            console.log(total);
        } else if (type == "water") {
            let type1 = 0.7;
            let total = number * type1;
            console.log(total);
        } else if (type == "beer") {
            let type1 = 1.15;
            let total = number * type1;
            console.log(total);
        } else if (type == "sweets") {
            let type1 = 1.30;
            let total = number * type1;
            console.log(total);
        } else if (type == "peanuts") {
            let type1 = 1.50;
            let total = number * type1;
            console.log(total);
        }
    } else if (sity == "Varna") {
        if (type == "coffee") {
            type1 = 0.45;
            total = number * type1;
            console.log(total);
        } else if (type == "water") {
            type1 = 0.7;
            total = number * type1;
            console.log(total);
        } else if (type == "beer") {
            type1 = 1.10;
            total = number * type1;
            console.log(total);
        } else if (type == "sweets") {
            type1 = 1.35;
            total = number * type1;
            console.log(total);
        } else if (type == "peanuts") {
            type1 = 1.55;
            total = number * type1;
            console.log(total);
        }
    }
}
solve("beer", "Sofia", 
