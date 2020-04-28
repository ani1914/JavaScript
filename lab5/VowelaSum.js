function solve(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        let name1 = name[i];

        if (name1 == "a")
            sum = sum + 1;
        else if (name1 == "e")
            sum = sum + 2;
        else if (name1 == "i")
            sum = sum + 3;
        else if (name1 == "o")
            sum = sum + 4;
        else if (name1 == "u")
            sum = sum + 5;

    }
    console.log(sum);
}
solve('ani');
