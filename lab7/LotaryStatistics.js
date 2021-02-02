function solve(n) {
    n = Number(n);
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0 && i < 10) {
            sum = sum + 1;
        }
        if (i % 2 == 0) {
            sum1 = sum1 + 1;
        }
        if (i % 10 == 7 && i % 2 != 0) {
            sum2 = sum2 + 1;
        }
        if (100 % i == 0) {
            sum3 = sum3 + 1;
        }
    }
    let p = (sum / n * 100).toFixed(2);
    let p1 = (sum1 / n * 100).toFixed(2);
    let p2 = (sum2 / n * 100).toFixed(2);
    let p3 = (sum3 / n * 100).toFixed(2);
    console.log(p + "%");
    console.log(p1+ "%");
    console.log(p2+ "%");
    console.log(p3+ "%");
}
solve(49);