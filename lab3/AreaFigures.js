function solve(type, n1, n2) {
    let area
    if (type == "square") {
        area = n1 * n1;
    } else if (type == "rectangle") {
        area = n1 * n2;
    } else if (type == "circle") {
        area = Math.PI * (n1 * n1);
    } else {
        area = n1 / 2 * n2;
    }
    console.log(area.toFixed(3));

}
solve("square", 10)