function fish([priceSs, priceCs, kilPs, kilSafs, kilMids]) {
    let priceS = parseFloat(priceSs);
    let priceC = parseFloat(priceCs);
    let kilP = parseFloat(kilPs);
    let kilSaf = parseFloat(kilSafs);
    let kilMid = parseFloat(kilMids);

    let priceP = priceS + priceS * 0.60;
    let priceSaf = priceC + priceC * 0.80;
    let totalP = kilP * priceP;
    let totalSaf = kilSaf * priceSaf;
    let totalMid = kilMid * 7.50;
    
    let total = (totalP + totalSaf + totalMid).toFixed(2);
    
    console.log(total);
}
fish([6.90, 4.20, 1.5, 2.5, 1]);