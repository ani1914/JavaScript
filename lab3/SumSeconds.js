function solve(s1, s2, s3) {
    s1 = Number(s1);
    s2 = Number(s2);
    s3 = Number(s3);

    total = s1 + s2 + s3;

    let minutes = Math.trunc(total / 60);
    let seconds = total % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else
        console.log(`${minutes}:${seconds}`)
}
solve(35, 45, 44);