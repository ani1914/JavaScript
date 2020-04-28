function home([x1, y1, h1]) {
    let x = parseFloat(x1);
    let y = parseFloat(y1);
    let h = parseFloat(h1);

    let Skv = x * x;
    let Svr = 1.2 * 2;
    let Sprav = x * y;
    let Spr = 1.5 * 1.5;
    let S1 = (2 * Skv - Svr) + (2 * Sprav - 2 * Spr);

    let Str = (x * h) / 2;
    let S2 = 2 * Str + 2 * Sprav;

    let Sgreen = (S1 / 3.4).toFixed(2);
    let Sred = (S2 / 4.3).toFixed(2);

    console.log(Sgreen);
    console.log(Sred);

}
home([6, 10, 5.2]);