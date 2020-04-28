function solve(n) {
    n = Number(n);
    let f = 0;
    for (let i = 0; i <= n; i += 2) {
        f = Math.pow(2, i);
        console.log(f);
    }

}
solve(5);