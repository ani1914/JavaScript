function solve(age, sex) {
    age = Number(age);
    if (sex == "f") {
        if (age >= 16)
            console.log("Ms.")
        else
            console.log("Miss")
    } else if (sex == "m") {
        if (age >= 16)
            console.log("Mr.")
        else
            console.log("Master")
    }
}
solve(12, "f");