// var logger = function() {
// 	var message = 'hi';
// 	console.log(message);
// };

const logger = () => {
  const message = 'Hi';
  console.log(message);
}

// var looper = function() {
// 	var message = 'I love JS!';
// 	for (var i = 0; i < 10; i++) {
// 		console.log(message);
// 	}
// };
const looper = () => {
  const message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message)
  }
}

// var greet = function(name) {
// 	var greeting = 'Hello ' + name + '!';
// 	console.log(greeting);
// };
const greet = (name) => {
  const greeting = `Hello ${name}!`;
  console.log(greeting);
} 

// var yourName = 'put your name in here';
const yourName = 'Ryan' // or 'put your name here' ?

logger();
looper();
greet(yourName);
