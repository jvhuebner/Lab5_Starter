// explore.js

window.addEventListener('DOMContentLoaded', init);

const voiceDrop = document.getElementById("voice-select");

function init() {
  // TODO
  const winSpeach = window.speechSynthesis;
  let voiceList =[];

  //populate the list of voices mozilla documentation
  //modified from 
  function populateDropDown() {
    voiceList =winSpeach.getVoices();

    for (let i = 0; i < voiceList.length; i++ ) {
      const curr = document.createElement("option" );
      curr.setAttribute( "data-name", voiceList[i].name);
      curr.setAttribute("data-lang", voiceList[i].lang);
      curr.textContent = `${voiceList[i].name}` +" " +  `(${voiceList[i].lang})`;
      voiceDrop.appendChild(curr);
    }
  }

  //call function to populate drowdown of voices
  //modified from mozilla documentation
  populateDropDown();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateDropDown;
  }

  //say text in text box on click
  const inField = document.querySelector("textarea");
  let inTex ="";
  const play = document.querySelector("button");
  inField.addEventListener("change", ()=>{ inTex =inField.value })
  const img = document.querySelector("img");

  play.addEventListener("click", ()=>{
    const words = new SpeechSynthesisUtterance(inTex);
    words.voice =  voiceList[voiceDrop.selectedIndex -1];
    winSpeach.speak(words);

    img.setAttribute("src", "assets/images/smiling-open.png");

    const spInt = setInterval(() => {
      if (!winSpeach.speaking) {

          clearInterval(spInt);
          img.setAttribute("src", "assets/images/smiling.png");
      }
    }, 100);

  })


}