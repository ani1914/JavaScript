function solve(nam) {
    let name = nam.shift();
    let pas = nam.shift();
    let yes = nam.shift();
    while (pas != yes) {
        yes = nam.shift();
    }
    console.log(`Welcome ${name}!`);
}