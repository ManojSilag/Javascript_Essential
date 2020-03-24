function doSomeMath() {
	var a = 5;
	var b = 4;

	function multiply(){
		var result = a*a;
		return result
	}

	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
