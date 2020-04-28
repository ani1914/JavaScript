function tailoring(masi1, d1, s1) {
    let masi = parseInt(masi1);
    let d = parseFloat(d1);
    let s = parseFloat(s1);
    let ostatak = 30 / 100;

    let Spok = masi * (d + (2 * ostatak)) * (s + (2 * ostatak));
    let Skar = (d / 2) * (d / 2) * masi;


    let Total = ((Spok * 7) + (Skar * 9)).toFixed(2);
    let Total1 = (Total * 1.85).toFixed(2);

    console.log(`${Total} USD`);
    console.log(`${Total1} BGN`);


}
tailoring(5, 1.00, 0, 50)