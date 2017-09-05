const logger = (message) => message;
    console.log(logger(`hi`));
  
  const looper = (message) => message;
    for (let i = 0; i < 10; i++) {
      console.log(looper(`I love JS!`));
    }
  
    const yourName = 'Chris';
    const greet = (name) => `Hello ${name}!`;
    console.log(greet(yourName));
  
  
  
  logger();
  looper();
  greet(yourName);
