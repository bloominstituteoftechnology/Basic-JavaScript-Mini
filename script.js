const logger = () => {
  let message = 'hi';
  console.log(message);
};

const looper = () => {
  let message = 'I feel lukewarm towards JavaScript!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name) => {
  let greeting = `Hello ${name} !`;
  console.log(greeting);
};

let yourName = 'Jonathan Chiang';

logger();
looper();
greet(yourName);
