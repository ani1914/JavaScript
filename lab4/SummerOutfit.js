function solve(temp,time){
    temp=Number(temp);

    if(temp>=10&&temp<=18&&time=="Morning")
    console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`)
    else if(temp>=10&&temp<=18&&time=="Afternoon")
    console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`)
    else if(temp>=10&&temp<=18&&time=="Evening")
    console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`)  



    else if(temp>18&&temp<=24&&time=="Morning")
    console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`)
    else if(temp>18&&temp<=24&&time=="Afternoon")
    console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`)
    else if(temp>18&&temp<=24&&time=="Evening")
    console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`)  


    else if(temp>=24&&time=="Morning")
    console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`)
    else if(temp>=24&&time=="Afternoon")
    console.log(`It's ${temp} degrees, get your Swim Suit and Barefoot.`)
    else if(temp>=24&&time=="Evening")
    console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`)  

}