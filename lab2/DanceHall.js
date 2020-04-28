function Hill(l, w, a) {


    let S = (l * 100) * (w * 100);
    let Sgar = (a * 100) * (a * 100);
    let Spei = S / 10;

    let sp = S - Sgar - Spei;
    let final = Math.floor(sp / (40 + 7000));

    console.log(final);
}
Hill(50, 25, 2);