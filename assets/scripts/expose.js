// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  const aud =document.querySelector("audio");
  const hornSel = document.querySelector("#horn-select");
  const hornImg =document.querySelector("#expose img");
  
  // take input on which horn to select audio file and image
  hornSel.addEventListener("input", function () {
    aud.setAttribute("src", "assets/audio/" + hornSel.value + ".mp3");
    hornImg.setAttribute("src", "assets/images/" + hornSel.value + ".svg");
    
  });

  //take input on volume level to select volImg and volume level
  const volSel = document.querySelector("#volume");
  const volImg = document.querySelector("#volume-controls img");

  volSel.addEventListener("input", function () {
    //set volume level of audio
    let vol = parseInt(volSel.value);
    aud.volume = vol / 100;

    //set volLevel for icon
    let volLev = 0;
    if (vol == 0){
      volLev = 0;
    } else if (vol <33 ) {
      volLev = 1;
    } else if (vol < 67) {
      volLev = 2;
    } else if (vol > 66){
      volLev = 3;
    }
    //select icon based on volLev
    volImg.setAttribute("src", "assets/icons/volume-level-" + volLev + ".svg");

  });

  //execute sound and confetti on click
  const con = new JSConfetti();
  const audioButton = document.querySelector("button");
  audioButton.addEventListener("click", function () {
    if (aud.getAttribute("src") == "") { 
      //dont do anything if no audio selected
    } else {

      if (hornSel.value == "party-horn") {
        con.addConfetti();
      }

      aud.play();
    }
  });
  

}