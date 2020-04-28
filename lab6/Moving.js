function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let h = Number(input.shift());
    let kub = 1 * 1 * 1;
    let v = a * b * h;
    let name = input.shift();
    let svobodno = 0;
    while (name != "Done" && v >= svobodno) {
        name = Number(name);
        svobodno += name;
        name = input.shift();



    }
    if (name == "Done") {
        let sum = v - svobodno;
        console.log(`${sum} Cubic meters left.`)
    } else if (v < svobodno) {
        let sum1 = svobodno - v;
        console.log(`No more free space! You need ${sum1} Cubic meters more.`)
    }
}
solve(['10', '1', '2', '4', '6', 'Done'])