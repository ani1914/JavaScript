function solve(type, day, number) {
    number = Number(number);


    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (type == "banana")
            console.log((2.5 * number).toFixed(2));
        else if (type == "apple")
            console.log((1.2 * number).toFixed(2));
        else if (type == "orange")
            console.log((0.85 * number).toFixed(2));
        else if (type == "grapefruit")
            console.log((1.45 * number).toFixed(2));
        else if (type == "kiwi")
            console.log((2.7 * number).toFixed(2));
        else if (type == "pineapple")
            console.log((5.5 * number).toFixed(2));
        else if (type == "grapes")
            console.log((3.85 * number).toFixed(2));
        else
            console.log("error")

    } else if (day == "Saturday" || day == "Sunday") {
        if (type == "banana")
            console.log((2.7 * number).toFixed(2));
        else if (type == "apple")
            console.log((1.25 * number).toFixed(2));
        else if (type == "orange")
            console.log((0.9 * number).toFixed(2));
        else if (type == "grapefruit")
            console.log((1.60 * number).toFixed(2));
        else if (type == "kiwi")
            console.log((3.00 * number).toFixed(2));
        else if (type == "pineapple")
            console.log((5.60 * number).toFixed(2));
        else if (type == "grapes")

            console.log((4.20*number).toFixed(2));
    } else
        console.log("error");


}
solve("apple", "Saturday", 2);