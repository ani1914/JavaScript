function solve(type, free, home) {
    free = Number(free);
    home = Number(home);
    let weekend = 48;
    let sofia = ((weekend - home) * (3 / 4)) + (free * (2 / 3));
    let total = sofia + home;
    if (type == "leap") {
        total = total + (total * 0.15);

    } else if (type == "normal") {
        total

    }
    console.log(Math.floor(total));
}
solve("leap", 2, 3);