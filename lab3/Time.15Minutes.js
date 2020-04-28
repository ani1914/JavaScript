function solve(hors, minutes) {
    hors = Number(hors);
    minutes = Number(minutes);
    let totalM = (minutes + 15) % 60;
    let totalH = Math.trunc((hors + (minutes + 15) / 60) % 24);
    if (totalH == 24)
        totalH = 0;

    if (totalM < 10)
        console.log(`${totalH}:0${totalM}`)
    else
        console.log(`${totalH}:${totalM}`)
}
solve(23, 46);