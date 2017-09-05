const logger = function() {
  const message = 'hi';
  console.log(message);
};

const looper = () => {
  const message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name)  => {
  const greeting = `Hello ${name}!`;
  console.log(greeting);
};

const yourName = 'squeel';

logger();
looper();
greet(yourName);
