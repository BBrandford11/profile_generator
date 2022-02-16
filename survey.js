const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name : ', (name) => {
  rl.question('What\'s an activity you like doing? : ', (activity) => { 
    rl.question('What do you listen to while doing that? : ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) : ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? : ', (food) => {
          rl.question('what is your favorite sport : ', (sport) => { 
            rl.question('What is your superpower? : ', (superpower) => {  
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`);
              rl.close();   
      
            });       
          });       
        });     
      });       
    });         
  });
});


