function greening(area) {
    let total1 = area * 7.61;
    let percent = (total1 * 0.18).toFixed(2);
    let finaltotal = (total1 - percent).toFixed(2);

    console.log(`The final price is: ${finaltotal} lv.`);
    console.log(`The discount is: ${percent} lv. `);

}
greening(540);