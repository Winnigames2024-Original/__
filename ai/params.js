const urlParams = new URLSearchParams(window.location.search);
const aiModel = urlParams.get('model');
const question = urlParams.get('q');
console.log(question);

if (aiModel == "TeleBotAI") {
  const answer = "DON%27T%20BELIVE%20IT";
  if (question == answer) {
    alert("ERROR 0x06x5x46. " + "ERROR MESSAGE: " + "!!!DON'T CLOSE ME!!! " + "Current AI Version: " + aiModel + "2x45xfDVD");
  }
  else {
    alert("Your question: " + question + ", AI answer: " + answer);
  }
}
