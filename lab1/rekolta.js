function total([prN1, prM1, N1, M1]) {
    let prN = parseFloat(prN1);
    let prM = parseFloat(prM1);
    let N = parseFloat(N1);
    let M = parseFloat(M1);
    let total1 = (((prN * N) + (prM * M)) / 1.94).toFixed(2);
    console.log(total1);

}
total([0.194, 19.4, 10, 10]);