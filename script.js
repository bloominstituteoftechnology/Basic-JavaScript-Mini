const logger = () => {
  const message = 'hi';
  console.log(message);
};

const looper = () =>{
  const message = 'I love JS!';
  for (var i = 0; i < 10; i++) {
    console.log(message);
  }
};

let greet = name => {
  let greeting = `Hello ${name}!`;
  console.log(greeting);
};

var yourName = 'put your name in here';

logger();
looper();
greet(yourName);
