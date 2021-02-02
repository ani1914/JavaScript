function area([b11, b21, h1]) {
    let b1 = parseFloat(b11);
    let b2 = parseFloat(b21);
    let h = parseFloat(h1);
    let area = ((b1 + b2) * h / 2).toFixed(2);
    console.log(area);
}
area([8, 13, 7]);