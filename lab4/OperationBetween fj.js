function solve(n1, n2, operatet) {
    n1 = Number(n1);
    n2 = Number(n2);
    let total = 0;
    let type = " ";

    if (operatet == "+") {
        total = n1 + n2;
        if (total % 2 == 0)
            type = "even";
        else
            type = "odd";
        console.log(`${n1} ${operatet} ${n2} = ${total} - ${type}`);
    } else if (operatet == "-") {
        total = n1 - n2;
        if (total % 2 == 0)
            type = "even";
        else
            type = "odd";
        console.log(`${n1} ${operatet} ${n2} = ${total} - ${type}`);
    } else if (operatet == "*") {
        total = n1 * n2;
        if (total % 2 == 0)
            type = "even";
        else
            type = "odd";
        console.log(`${n1} ${operatet} ${n2} = ${total} - ${type}`);
    } else if (operatet == "/") {
        if (n2 != 0) {
            total = (n1 / n2).toFixed(2);
            console.log(`${n1} / ${n2} = ${total}`);
        } else
            console.log(`Cannot divide ${n1} by zero`);
    } else if (operatet == "%") {
        if (n2 != 0) {
            total = (n1 % n2);
            console.log(`${n1} % ${n2} = ${total}`);
        } else if (n2 == 0)
            console.log(`Cannot divide ${n1} by zero`);
    }
}
solve(12, 10, "+");