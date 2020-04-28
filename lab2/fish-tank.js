function tank(d, s, h, parcent) {
    let d1 = d / 10;
    let s1 = s / 10;
    let h1 = h / 10;

    let V = d1 * s1 * h1;
    let parcent1 = parcent / 100;

    let p = V * parcent1;
    let total = V - p;
    console.log(total);
}
tank(85, 75, 47, 17);