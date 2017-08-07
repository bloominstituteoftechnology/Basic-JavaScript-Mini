const logger = () => {
  let message = 'hi';
  console.log(message);
};

const looper = () =>{
  let message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name) =>{
  const greeting = `Hello ${name}!`;
  console.log(greeting);
};

const yourName = 'Roland';

logger();
looper();
greet(yourName);

