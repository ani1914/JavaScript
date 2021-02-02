function SP([r1]) {
    let r = parseFloat(r1);
    let area = (Math.PI * r * r).toFixed(2);
    let parameter = (2 * Math.PI * r).toFixed(2);

    console.log(area);
    console.log(parameter)



}

SP([3]);