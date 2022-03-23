//JavaScript Algorithms and Data Structures Projects: Cash Register
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//The checkCashRegister() function should always return an object with a status key and a change key.

//Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

//Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

//Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let vuelto= Number((cash - price).toFixed(2));
  let denominacion=[0.01,0.05,0.1,0.25,1,5,10,20,100]
  let change=[];
  let result={};
for (let i=cid.length - 1; i>=0;i--){ 
let total=0
let montos=[];  
while(vuelto >= denominacion[i] && cid[i][1] > 0 ){
if(cid[i][1] === vuelto){
  result = {status:"CLOSED", change:cid}
}else{
let vueltoTotal = Number((vuelto -= denominacion[i]).toFixed(2))
vuelto=vueltoTotal
cid[i][1] -= denominacion[i]
let fueraCaja = total += denominacion[i]  
montos.splice(0)
montos.push(cid[i][0], fueraCaja) 
}  
}  
 if(montos[0] !== undefined && montos[1] !== undefined){
change.push(montos); 
}
if(vuelto === 0){
result= {status: "OPEN", change}
}else if(vuelto > cid[i][1]){
  result= {status: "INSUFFICIENT_FUNDS", change:[]}
}
 console.log(vuelto)
}


  
 return result
}
 
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])




 

