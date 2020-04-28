function solve(sity, mony) {
    mony = Number(mony);
    let total = 0;
    if (sity == "Sofia" && 0 <= mony && mony <= 500) {
        total = mony * 0.05;
        console.log((total).toFixed(2));
    } else if (sity == "Sofia" && 500 <= mony && mony <= 1000) {
        total = mony * 0.07;
        console.log((total).toFixed(2));
    } else if (sity == "Sofia" && 1000 <= mony && mony <= 10000) {
        total = mony * 0.08;
        console.log((total).toFixed(2));
    } else if (sity == "Sofia" && mony > 10000) {
        total = mony * 0.12;
        console.log((total).toFixed(2));
    } else if (sity == "Varna" && 0 <= mony && mony <= 500) {
        total = mony * 0.045;
        console.log((total).toFixed(2));
    } else if (sity == "Varna" && 500 <= mony && mony <= 1000) {
        total = mony * 0.075;
        console.log((total).toFixed(2));
    } else if (sity == "Varna" && 1000 <= mony && mony <= 10000) {
        total = mony * 0.10;
        console.log((total).toFixed(2));
    } else if (sity == "Varna" && mony > 10000) {
        total = mony * 0.13;
        console.log((total).toFixed(2));
    } else if (sity == "Plovdiv" && 0 <= mony && mony <= 500) {
        total = mony * 0.055;
        console.log((total).toFixed(2));
    } else if (sity == "Plovdiv" && 500 <= mony && mony <= 1000) {
        total = mony * 0.08;
        console.log((total).toFixed(2));
    } else if (sity == "Plovdiv" && 1000 <= mony && mony <= 10000) {
        total = mony * 0.12;
        console.log((total).toFixed(2));
    } else if (sity == "Plovdiv" && mony > 10000) {
        total = mony * 0.145;
        console.log((total).toFixed(2));
    } else
        console.log("error")



}
solve("Sofia", 1500);