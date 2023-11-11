var tie = 0;
var win = 0;
var lose = 0;

window.confirm("Let's play Rock, Paper, Scissors!");
var whichOne = prompt("Enter R for Rock, P for Paper, or S for Scissors");


function playGame(whichOne) {
  // Generate a random choice for the computer
  // const : Creates an immutable reference to a value
  const choices = ["Rock", "Paper", "Scissors"];
  // Randomly choose an index by using math.floor(Math.random)
  const computerChoice = choices[Math.floor(Math.random()) * choices.length];

  if (whichOne.toUpperCase() === computerChoice) {
    window.alert("It's a tie!");
    tie++;
  } else if (
    (whichOne.toUpperCase() === "R" && computerChoice === "Paper") ||
    (whichOne.toUpperCase() === "P" && computerChoice === "Scissors") ||
    (whichOne.toUpperCase() === "S" && computerChoice === "Rock")
  ) {
    window.alert("You lose! I chose " + computerChoice);
    lose++;
  } else {
    window.alert("You win! I chose " + computerChoice);
    win++;
  }
  window.alert(
    "Status: \nYour total wins = " +
      win +
      "\nYour total losses = " +
      lose +
      "\nYour total ties= " +
      tie
  );

}

playGame(whichOne);

var repeat = window.confirm("Do you want to play more?");

while(repeat == true)   {
    var whichOne = prompt("Enter R for Rock, P for Paper, or S for Scissors");
    playGame(whichOne);
}
