function calculate(args) {
	
	let result;
	
	if (args.op === "+") {
		result = args.n1 + args.n2;
	} else if (args.op === "-") {
		result = args.n1 - args.n2;
	} else {
		result = "Not supported";
	}
	
	return result;
}

// first way: create a simple object directly 
const object1 = {
	op: "+",
	n1: 9,
	n2: 23
};

// second way: create a class to normalize the the input
class CalcInput {
	constructor (operator, n1, n2) {
		if (operator === "+" || operator === "-") {
			this.op = operator;
		} else {
			console.log("Not a supported operator by function 'calculate'.");
		}

		if (typeof(n1) === "number" && typeof(n2) === "number") {
			this.n1 = n1;
			this.n2 = n2;
		} else {
			console.log("Not a supported operator by function 'calculate'.");
		}
	}
}

console.log("=======Case 1: object1=================================");
console.log(calculate(object1));
console.log("=======Case 2: object2 with correct input-type=========");
var object2 = new CalcInput("+", 9, 23);
console.log(calculate(object2));
console.log("=======Case 3: object2 with incorrect input-type=======");
var object2 = new CalcInput("+", "9", 23);
console.log(calculate(object2));

