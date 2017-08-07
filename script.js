const logger = function() {
	const message = 'hi';
	console.log(message);
};

let looper = function() {
	let message = 'I love JS!';
	for (let i = 0; i < 10; i++) {
		console.log(message);
	}
};

const foo greet => function(name) {
	var greeting = 'Hello ' + name + '!';
	console.log(greeting);
};

const yourName = 'put your name in here';

logger();
looper();
greet(yourName);
