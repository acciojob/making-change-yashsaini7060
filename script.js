const makeChange = (c) => {
  // your name here
	let money = c;
	let outObj ={
		q:0,
		d:0,
		n:0,
		p:0
	}

	outObj.q = Math.floor(money/25);
	money -= outObj.q*25;
	outObj.d = Math.floor(money/10);
	money -= outObj.d*10;
	console.log(money)
	outObj.n = Math.floor(money/5);
	money -= outObj.n*5;

	outObj.p = Math.floor(money/1);
	money -= outObj.p*1;

	// console.log(money)
	// console.log(outObj)
	return outObj;


};
makeChange(47)
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

