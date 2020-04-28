function solve(n) {
    n = Number(n);
    let third = 0;
    if (n % 2 == 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                third = i * i * i;
                console.log(`Current number: ${i}. Cube: ${third}`);
            }
        }
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                third = i * i * i;
                console.log(`Current number: ${i}. Cube: ${third}`)
            }
        }
    }
}
solve(5);