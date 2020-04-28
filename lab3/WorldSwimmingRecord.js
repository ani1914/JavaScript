function swim(rec, distance, time) {
    rec = Number(rec);
    distance = Number(distance);
    time = Number(time);

    let total = time * distance;
    let zab1 = Math.floor(distance / 15);
    let zab = zab1 * 12.5;
    let final = total + zab;
    if (final < rec) {
        let result = (rec - final).toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${final.toFixed(2)} seconds.`);
    } else {
        let rezult1 = (final - rec).toFixed(2);
        console.log(`No, he failed! He was ${rezult1} seconds slower.`);
    }

}
swim("55555.67", "3017", "5.03");