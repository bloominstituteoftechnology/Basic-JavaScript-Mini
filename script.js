let logger = () => {
  let message = 'hi';
  console.log(message);
};

let looper = () => {
  let message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

let greet (name) => {
  let greeting = 'Hello ' + name + '!';
  console.log(greeting);
};

let yourName = 'Darryl';

logger();
looper();
greet(yourName);
