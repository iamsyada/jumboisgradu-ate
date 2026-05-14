window.addEventListener("load", () => {

  alert(
    "Happy Graduate 🎓\n\nSelamat atas pencapaian luar biasa ini."
  );

  const bgVideo = document.getElementById("bgVideo");

  const music = document.getElementById("music");

  // PLAY VIDEO
  bgVideo.play();

  // PLAY MUSIC
  music.play();

  // TYPING EFFECT
  const typing = document.getElementById("typing");

  const text = "Happy Graduate 🎓";

  let index = 0;

  function typeText(){

    if(index < text.length){

      typing.innerHTML += text.charAt(index);

      index++;

      setTimeout(typeText, 120);

    }

  }

  typeText();

});
