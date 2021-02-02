function solve(input){
    let startNumber=Number(input.shift());
    let mintNumber=Number.MAX_SAFE_INTEGER;
    let j=1;
    while(j<=startNumber){
        let nextNumber=Number(input.shift());
        if(nextNumber<mintNumber){
            mintNumber=nextNumber;
        }
        j++
    }
    console.log(mintNumber);
}