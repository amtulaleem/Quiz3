// Event listener for the button click
document
  .getElementById("calculateScore")
  .addEventListener("click", calculateScore);

// Function to calculate and display the quiz score
function calculateScore() {
  // Retrieving user inputs and converting to lowercase
  let capital = document.getElementById("cap").value.toLowerCase();
  let knownFact = document.getElementById("known").value.toLowerCase();
  let largestCityAnswer = document
    .getElementById("largestCity")
    .value.toLowerCase();
  let nationalParkAnswer = document
    .getElementById("nationalPark")
    .value.toLowerCase();

  // Initialize variables for tracking correct answers
  let totalQuestions = 4;
  let correctAnswers = 0;

  // Question 1
  if (capital === "edmonton") {
    document.getElementById("res1").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res1").innerHTML = "Incorrect";
  }

  // Question 2
  if (knownFact === "oil") {
    document.getElementById("res2").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res2").innerHTML = "Incorrect";
  }

  // Question 3
  if (largestCityAnswer === "calgary") {
    document.getElementById("res3").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res3").innerHTML = "Incorrect";
  }

  // Question 4
  if (
    nationalParkAnswer === "banff" ||
    nationalParkAnswer === "banff national park"
  ) {
    document.getElementById("res4").innerHTML = "Correct";
    correctAnswers++;
  } else {
    document.getElementById("res4").innerHTML = "Incorrect";
  }

  // Calculate the percentage
  let percentage = (correctAnswers / totalQuestions) * 100;

  // Display the total score and percentage
  document.getElementById("output").innerHTML =
    "Total Score: " +
    correctAnswers +
    "/" +
    totalQuestions +
    " (" +
    percentage +
    "%)";

  // Provide feedback to the user based on their score
  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage = "Perfect score! Great job!";
  } else if (percentage >= 75) {
    feedbackMessage = "Well done! Keep it up!";
  } else {
    feedbackMessage = "You can do better. Keep practicing!";
  }

  // Display the feedback message
  document.getElementById("feedback").innerHTML = feedbackMessage;
}
