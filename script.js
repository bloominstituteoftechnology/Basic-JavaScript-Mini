const logger = () = => {
	message = 'hi';
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
};

const yourName = 'Sam';
logger();
looper();
greet(yourName);