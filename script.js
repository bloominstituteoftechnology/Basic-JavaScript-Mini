const logger = () => {
  let message = 'hi';
  console.log(message);
};

const looper = () => {
  let message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name) => {
  var greeting = `Hello ${name}!`;
  console.log(greeting);
};

let yourName = 'Illa';

logger();
looper();
greet(yourName);
