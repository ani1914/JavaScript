function solve(number, txt1, txt2) {
    number = Number(number);


    if (txt1 == "m" && txt2 == "cm") {
        console.log((number * 100).toFixed(3));
    } else if (txt1 == "m" && txt2 == "mm") {
        console.log((number * 1000).toFixed(3));
    } else if (txt1 == "cm" && txt2 == "mm") {
        console.log((number * 10).toFixed(3));
    } else if (txt1 == "cm" && txt2 == "m") {
        console.log((number / 100).toFixed(3));
    } else if (txt1 == "mm" && txt2 == "m") {
        console.log((number / 1000).toFixed(3));
    } else if (txt1 == "mm" && txt2 == "cm") {
        console.log((number / 10).toFixed(3));
    }

}
solve(12, "mm", "m")