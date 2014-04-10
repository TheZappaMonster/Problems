markosgame.js

// Check if the user is ready to play!
confirm("Are you ready to play!?");
age = prompt("How old are you?");

if( age < 13)
{
  console.log("You are under ten, we take no responsibility of you playing the game.");
} 
else  
{
console.log("Have an epic adventure!");
} 
console.log("You are at a Marcel Tanaka concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Marcel stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Marcel on stage?");
 
 if (userAnswer === "yes")
 {
     console.log("You and Marcel start racing. It's neck and neck! You win by a shoelace!")
     
 }
else {
    console.log("Oh no! Marcel shakes his head and sings 'I set a pace, so I can race without pacing.'");
    
}

feedback = prompt("Feedback, how good was it? 1-10. 1 is bad and 10 is awesome!")

if(feedback > 8) {
    console.log("Thank you! We should race at the next concert!")
    
} 
else {
    console.log("I'll keep practicing coding and racing.")
    
}















