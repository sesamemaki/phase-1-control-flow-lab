function scuberGreetingForFeet(feet) {
  // Write your code here!
  let message;
  if (feet <= 400) {
    message = "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    message = "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    message = "I will gladly take your thirty bucks.";
  } else if (feet >= 2500) {
    message = "No can do.";
  }
  return message;
}
// console.log(scuberGreetingForFeet(100));

function ternaryCheckCity(city) {
  // Write your code here!|
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}

// console.log(ternaryCheckCity("NYC"))

function switchOnCharmFromTip() {
  // Write your code here!

  let tip = "not as generous";

  switch (tip) {
    case "generous":
      console.log("Thank you so much.");
      break;
    case "not as generous":
      console.log("Thank you.");
      break;
    default:
      console.log("Bye");
  }
}
switchOnCharmFromTip()