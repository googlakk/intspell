const wordsSet = [
  ...new Set([
"Incomprehensibilities ",
"uncopyrightable ",
"Counterdemonstration ",
"Uncharacteristically ",
"Institutionalisation ",
"Microseismograph ",
"Nonrepresentationalism ",
"Overinterpretations ",
"Counterrevolutionaries ",
"Unenthusiastically ",
"Overintellectualised ",
"Hyperresponsibility ",
"Phenomenologically ",
"Disproportionately ",
"Electromagnetically ",
"Resourcefulness ",
"Disequilibrium",
"unpronounceable ",
"Semimanufactures",
"Subterranean",
"Tintinnabulation",
"Pharmaceutical ",
"Hyperpyrexia",
"Transubstantiation",
"Chrysanthemum",
"Imprescriptible",
"Staphylococcus",
"Inconsequential",
"Triskaidekaphobia ",
"humanitarianism ",
"crystallomancy",
"applicableness",
"autocurriculum",
"experimentation",
"logarithmically",
"distinguishable",
"mechanochemical",
"methamphetamine",
"monopathophobia",
"purposelessness",
"quadruplication",
"quarrelsomeness",
"transmissometer",
"trustworthiness",
"synergistically",
"photodetachment",
"redetermination",
"reprecipitation",
"multiculturalism",
"quarkochemistry",
  ]),
].map((s) => s.toLowerCase().trim());

async function getAudioUrl(str) {
  const voice = {
    text: "",
    type: 0,
    ssml: 0,
    isLoginUser: 1,
    voiceType: "",
    languageCode: "en-US",
    voiceName: "en-US-Standard-C",
    gender: "FEMALE",
    speed: "1.0",
    pitch: "0",
    volume: "0",
    format: "mp3",
    quality: 0,
    isListenlingMode: 0,
    displayName: "Melissa Salazar",
  };

  voice.text = str;

  const { data } = await fetch(
    "https://freetts.com/api/TTS/SynthesizeTextNew",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "ru,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
        authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      referrer: "https://freetts.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(voice),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  ).then((res) => res.json());

  return data.audiourl;
}

function download(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

(async () => {
  for (let i = 0; i < wordsSet.length; i++) {
    const audioUrl = await getAudioUrl(wordsSet[i]);
    download(audioUrl, wordsSet[i] + ".mp3");
    if (wordsSet.length === 0) {
      console.log("Все слова озвучены");
    }
  }
})();

// const voice = {
//   text: "",
//   type: 0,
//   ssml: 0,

//   country: "English (US)",
//   voiceType: "WaveNet",
//   languageCode: "en-US",
//   voiceName: "en-US-Standard-C",
//   gender: "FEMALE",
// };
