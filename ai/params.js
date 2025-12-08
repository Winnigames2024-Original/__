const urlParams = new URLSearchParams(window.location.search);
const aiModel = urlParams.get('model');

if (aiModel == "TeleBotAI") {
  const answer = "DON%27T%20BELIVE%20IT";
  const question = urlParams.get('q');
  if (question == "DON%27T%20BELIVE%20IT") {
    cosnt msg_err = "ERROR 0x06x5x46. " + "ERROR MESSAGE: " + "!!!DON'T CLOSE ME!!! " + "Current AI Version: " + aiModel + "-AmandaHackSoftware";
    alert(msg_err);
    alert("AI: "+ aiModel + " hacked by " + "-AmandaHackSoftware");
    window.location = "https://winnigames2024-original.github.io/__/ai/?model=AmandaHackSoftware&tool=BesyashiySayt";
  }
  else {
    cosnt msg_answer = "Your question: " + question + ", AI answer: " + answer;
    alert(msg_answer);
  }
}
