function to(radians) {
    let degrees = (radians * 180 / Math.PI).toFixed(0);
    console.log(degrees);
}
to(3.1416);