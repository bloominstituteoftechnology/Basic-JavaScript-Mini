const logger = (message) => {
  console.log(message);
}


const looper = (message) => {
  for(let i = 0; i < 10; i++) {
    console.log(message);
  }
};


vconst greet = (name) => {
  const greeting = `Hello ${name}!`;
  console.log(greeting);
}

const mattFay = 'Matt Fay';

logger('hi');
looper('I love JS!');
greet('Matt');
