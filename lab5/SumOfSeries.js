function solve(n) {
    n = Number(n);
    let rezult = 0;
    for (let i = 1; i <= n; i++) {
        rezult = rezult + (i * i);

    }
    console.log(rezult);
}
solve(7);