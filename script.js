const logger = ()=> {
  const message = 'hi';
  console.log(message);
};

const looper = () => {
  } var message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name)=> {
  var greeting = 'Hello my name is ${name}!';

  console.log(greeting);
};

const yourName = 'John';

logger();
looper();
greet(yourName);
