const urlParams = new URLSearchParams(window.location.search);
const aiModel = urlParams.get('model');

if (aiModel == "AmandaHackSoftware") {
    const amandahacksoftware_tool = urlParams.get('tool');

    if (amandahacksoftware_tool == "BesyashiySayt") {
      window.location = "https://winnigames2024-original.github.io/__/BesyashiySayt/";
    }
  }
