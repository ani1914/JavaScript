function solve(n,price,bg){
  price=Number(price);
  bg=Number(bg);
  let sum=0;
  for(let i=0;i<n.length;i++){
      let n1=n[i];
     if(n1=="a" ||n1=="e" ||n1=="i" ||n1=="o" ||n1=="u" ||n1=="y")
     sum=sum+3;
  else
  sum=sum+1}
  let total=(sum*price).toFixed(2);
  let ost=((total-bg)*(-1)).toFixed(2);
  if(bg<total)
  console.log(`Cannot buy ${n}. Product value: ${total}`);
  else
  console.log(`${n} bought. Money left: ${ost}`)

}