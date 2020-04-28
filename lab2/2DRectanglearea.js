function area(x1, y1, x2, y2) {

    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let S = (length * width).toFixed(2);
    let P = (2 * (length + width)).toFixed(2);

    console.log(S);
    console.log(P);
}
area(60, 20, 10, 50);