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
	// var greeting = 'Hello ' + name + '!';
	const greeting = `Hello ${name}!`;
	console.log(greeting);
};

let yourName = 'Raymond Rosario';

logger();
looper();
greet(yourName);
