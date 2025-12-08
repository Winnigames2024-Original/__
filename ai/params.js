const urlParams = new URLSearchParams(window.location.search);
const aiModel = urlParams.get('model');
const question = urlParams.get('q');
console.log(question);

if (aiModel == "TeleBotAI") {
  const answer = "DON%27T%20BELIVE%20IT";
  if (question == "DON%27T%20BELIVE%20IT") {
    cosnt msg_err = "ERROR 0x06x5x46. " + "ERROR MESSAGE: " + "!!!DON'T CLOSE ME!!! " + "Current AI Version: " + aiModel + "2x45xfDVD";
    alert(msg_err);
  }
  else {
    cosnt msg_answer = "Your question: " + question + ", AI answer: " + answer;
    alert(msg_answer);
  }
}
