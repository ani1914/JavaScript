function room([w, h]) {
    let areaH = Math.trunc(((h * 100) - 100) / 70);
    let areaW = Math.trunc((w * 100) / 120);
    let final = areaH * areaW - 3;
    console.log(final);
}
room([15, 8.9]);
