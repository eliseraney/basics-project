function beginAdventure() {
  let name = prompt("Weary traveler, what is your name?");
  let h1 = document.querySelector("h1");

  h1.innerHTML = "Welcome, " + name + "!";

  let firstQuestion = prompt(
    "How many sides does a hexagon have? Enter answer as a numerical value."
  );
  let secondQuestion = prompt(
    "What is the ninth prime number? Enter answer as a numerical value."
  );
  let thirdQuestion = prompt(
    "What year did the Titanic sink? Enter answer as YYYY."
  );

  if (
    firstQuestion === "6" &&
    secondQuestion === "23" &&
    thirdQuestion === "1912"
  ) {
    alert("Congrats, you have made it back!");
  } else {
    alert("Uh oh, one of your answers must be wrong. Try again.");
  }
}

let beginAdventureButton = document.querySelector("button");

beginAdventureButton.addEventListener("click", beginAdventure);
