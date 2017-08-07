<<<<<<< HEAD
const logger = () => {
	const message = 'hi';
	console.log(message);
};

const looper = () => {
	const message = 'I love JS!';
	for (let i = 0; i < 10; i++) {
		console.log(message);
	}
};

const greet = (name) => {
	const greeting = `Hello ${name}!`;
	console.log(greeting);
=======
var logger = function() {
  var message = 'hi';
  console.log(message);
};

var looper = function() {
  var message = 'I love JS!';
  for (var i = 0; i < 10; i++) {
    console.log(message);
  }
};

var greet = function(name) {
  var greeting = 'Hello ' + name + '!';
  console.log(greeting);
>>>>>>> d3daaa72bdd4e2667a5b7436ec9d21d4a41f2e0f
};

const yourName = 'Allan';

logger();
looper();
greet(yourName);

