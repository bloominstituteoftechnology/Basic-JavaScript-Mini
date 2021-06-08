const logger = function() {
  let message = 'hi';
  console.log(message);
};

const looper = function() {
  let message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = name =>`Hello ${name}!`;

const yourName = 'Tai';

logger();
looper();
greet(yourName);

