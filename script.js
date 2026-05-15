window.addEventListener("load", () => {

  const bgVideo = document.getElementById("bgVideo");

  const music = document.getElementById("music");

  // PLAY VIDEO
  bgVideo.play();

  // TYPING EFFECT
  const typing = document.getElementById("typing");

  const text = "Selamat Wisuda Jumbo! 🎓";

  let index = 0;

  function typeText(){

    if(index < text.length){

      typing.innerHTML += text.charAt(index);

      index++;

      setTimeout(typeText, 120);

    }

  }

  typeText();

  // PLAY MUSIC AFTER FIRST CLICK
  document.body.addEventListener("click", () => {

    music.play();

  }, { once:true });

});
