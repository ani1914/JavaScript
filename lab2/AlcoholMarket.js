function market(PriceWhiskey, beer, wine, brady, whiskey) {
    let PriceBrady = PriceWhiskey*0.5;
    let PriceWine = PriceBrady - (PriceBrady * 0.4);
    let PriceBeer = PriceBrady - (PriceBrady * 0.8);

    let Total = ((whiskey * PriceWhiskey) + (beer * PriceBeer) + (wine * PriceWine) + (brady * PriceBrady)).toFixed(2);

    console.log(Total);


}
market(50, 10, 3.5, 6.5, 1);