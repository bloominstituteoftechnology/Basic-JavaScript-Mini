const logger = () => { //const logger = () => console.log('hi')
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
  let greeting = `Hello ${name}!`;
  console.log(greeting);
};

const yourName = 'Kairat';

logger();
looper();
greet(yourName);
