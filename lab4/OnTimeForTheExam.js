function solve(horse1, minutes1, horse2, minutes2) {
    horse1 = Number(horse1);
    horse2 = Number(horse2);
    minutes1 = Number(minutes1);
    minutes2 = Number(minutes2); 
    let horse = 0;
    let minutes = 0;

    let time1 = horse1 * 60 + minutes1;
    let time2 = horse2 * 60 + minutes2;
    let time3 = time1 - time2;
    if (time3 == 0) {
        console.log("On time");
    } else if (time3 > 0 && time3 <= 30) {
        console.log("On time");
        console.log(`${time3} minutes before the start`);
    } else if (time3 > 30 && time3 <= 59) {
        console.log('Early');
        console.log(`${time3} minutes before the start`);
    } else if (time3 > 59) {
        horse = Math.trunc(time3 / 60);
        minutes = time3 % 60;
        console.log("Early");
        if (minutes < 10)
            console.log(`${horse}:0${minutes} hours before the start`);
        else
            console.log(`${horse}:${minutes} hours before the start`);

    }
    else if(time3<0 && time3>=-59){
        time3=time3*(-1);
       
        console.log("Late");
        console.log(`${time3} minutes after the start`);
    }
    else if(time3<-59){
        time3=time3*(-1);
        horse = Math.trunc(time3 / 60);
        minutes = time3 % 60;
        console.log("Late");
        if (minutes < 10)
            console.log(`${horse}:0${minutes} hours after the start`);
        else
            console.log(`${horse}:${minutes} hours after the start`);
    }
}
solve(9, 00, 7, 30);