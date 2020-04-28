function ship(dohod, uspeh, zaplata) {
    dohod = Number(dohod);
    uspeh = Number(uspeh);
    zaplata = Number(zaplata);

    let social = Math.floor(zaplata * 0.35);
    let otlichen = Math.floor(uspeh * 25);



    if (dohod < zaplata && uspeh > 4.50 && uspeh >= 5.50) {

        if (social > otlichen)
            console.log(`You get a Social scholarship ${social} BGN`);
        else if (otlichen > social)
            console.log(`You get a scholarship for excellent results ${otlichen} BGN`);
    } else if (dohod < zaplata && uspeh > 4.50)
        console.log(`You get a Social scholarship ${social} BGN`);
    else if (uspeh >= 5.50)
    console.log(`You get a scholarship for excellent results ${otlichen} BGN`);
    
       
        
    else if (dohod > zaplata || uspeh < 4.50) {
        console.log("You cannot get a scholarship!");
    } else if (uspeh < 5.50) {
        console.log("You cannot get a scholarship!");
    }

}
ship(450.00, 5.70, 420.00)