const logger = (hello) => {
  console.log(hello);
}

const looper = (loop) =>{
  for (i = 0; i < 10; i++){
    console.log(loop);
  }
};

const greet = (name) =>{
  const greeting = `Hello ${name}!`;
  console.log(greeting);
};

logger('Hi\n');

looper('I love JS');
console.log('\n')

greet('Roland Canuto');
