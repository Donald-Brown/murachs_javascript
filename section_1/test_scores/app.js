let entry;
let average;
let scores = [];
let total = 0;
let show = "The test scores:\n";
let highScore = 0;

//first use a do-while loop to get scores from user
do {
  entry = parseInt(
    prompt("Enter test score\n" + "Or enter 999 to end entries", 999)
  );
  if (entry >= 0 && entry <= 100) {
    scores.push(entry);
  } else if (entry != 999) {
    alert(
      "Entry must by a valid number from 0 through 100\n" +
        "Or enter 999 to end entries"
    );
  }
} while (entry != 999);

//next use a for loop to process the scores
for (var i = 0; i < scores.length; i++) {
  total += scores[i]; //both are numbers so adds
  show += scores[i] + "\n"; //strings & numbers so concatenates
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}

//then calculate the average and display
average = parseInt(total / scores.length);
alert(show + "\nAverage score is " + average + "\nHigh Score is " + highScore);
