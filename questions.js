// 1. What is the value of foo?

function valueOfFooandBar() {
	var foo = 10 + '20';
	var bar = "10" - 1;

	console.log("The value of foo is", foo);
	// => 1020
	console.log("The value of bar is", bar);
	// => 9
	// note: for the add operator, it'll try to concatenate
	// instead of compute.
}


// 2. How would you make this work?
	// a. add(2,5);
	// b. add(2)(5);

var makeItWork = {
	// a. function declaration:
	addA: function(x,y) {
		return (x + y);
	},
	// b. function needs to return a function that adds itself!
	addB: function(x) {
			 return function(y) {
	       return x + y;
	  	 };
		 }	
};

// note:


// 3. What value is returned from the following statement?
	console.log(
		"hello world".split("").reverse().join("")
	);
	// => "dlrow olleh"
	// note: Don't be tricked with the .split(). It won't get
	// rid of the spaces!

// 4. What is the value of window.foo?
	var win = {};

	(win.foo || (win.foo = "bar"));
	// => "bar"
	//note: this expression will choose the first truthy value.

// 5. What is the outcome of the two alerts below?
	var foo = "hello";
	(function() {
		var bar = " world";
		console.log("From inside the function: ", foo + bar);
	})();

	console.log("From outside the function: ", foo + bar);
	// => "hello world" for the first one
	// => bar is not defined for the second one
	// note: bar is scoped inside the immediately invoked
	// anonymous function.

// 6. What is the value of arr.length?

	function arrLengthQuestion() {
		var arr = [];
		arr.push(1);
		arr.push(2);
		return arr.length;
	}

	arrLengthQuestion();

	// => 2
	// note: every .push will ADD the value to the end
	// of the array.

// 7. What is the value of fool.x?

	var fool = {n: 1};
	var bark = fool;
	fool.x = fool = {n: 2};
	// note: It changes bark but not fool.

	console.log(fool.x);
	// => undefined
	// note: As is, it doesn't store fool.x into the
	// fool object
	console.log(bark);
	// => { n: 1, x: { n: 2 } }
	console.log(fool);
	// => {n: 2}

	console.log(bark.n);
	// => 1
	console.log(fool.n);
	// => 2
	// note: If I typed in "fool.x = fool" || "bark"
	// then I get a [Circular] message
	
	// note: I beleive this has to to with order of
	// operations?

	//note: bark has fool.x but not fool because fool
	// gets reassigned to {n: 2}, making it lose fool.x









