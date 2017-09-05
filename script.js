const logger = function() {
  const message = 'hi';
  console.log(message);
};

const looper = function() {
  const message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = function(name) {
  let greeting = 'Hello ' + name + '!';
  console.log(greeting);
};

const yourName = 'put your name in here';

logger();
looper();
greet(yourName);
