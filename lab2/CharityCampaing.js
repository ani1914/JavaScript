function campaing(day, people, torta, cake, palachinka) {
    day = parseInt(day);
    people = parseInt(people);
    torta = parseFloat(torta);
    cake = parseFloat(cake);
    palachinka = parseFloat(palachinka);

    let Ftorta = day * people * (torta * 45);
    let Fcake = day * people * (cake * 5.80);
    let Fpalachinka = day * people * (palachinka * 3.20);

    let Total = Ftorta + Fcake + Fpalachinka;
    let Raz = Total / 8;
    let Final = (Total - Raz).toFixed(2);

    console.log(Final);

}
campaing(20, 8, 14, 30, 16);