const urlParams = new URLSearchParams(window.location.search);
const aiModel = urlParams.get('model');
const question = urlParams.get('q');

if (aiModel == "TeleBotAI") {
  const answer = "DON%27T%20BELIVE%20IT";
  if (question == "DON%27T%20BELIVE%20IT") {
    const msg_err2 = "AI: "+ aiModel + " hacked by " + "-AmandaHackSoftware";
    const msg_err = "ERROR 0x06x5x46. " + "ERROR MESSAGE: " + "!!!DON'T CLOSE ME!!! ";
    alert(msg_err);
    alert(msg_err2);
    window.location = "https://winnigames2024-original.github.io/__/ai/amandasoft.html?model=AmandaHackSoftware&tool=BesyashiySayt";
  }
  else {
    cosnt msg_answer = "Your question: " + question + ", AI answer: " + answer;
    alert(msg_answer);
  }
}
