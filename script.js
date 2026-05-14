const startBtn = document.getElementById("startBtn");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

const bgVideo = document.getElementById("bgVideo");

const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

  // PLAY VIDEO
  bgVideo.play();

  // PLAY MUSIC
  music.play();

  // HIDE OPENING
  opening.style.display = "none";

  // SHOW CONTENT
  mainContent.style.display = "flex";

});  leaf.classList.add("leaf");

  leaf.innerHTML = "🍃";

  leaf.style.left = Math.random() * 100 + "vw";

  leaf.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  leaf.style.fontSize =
    (Math.random() * 20 + 15) + "px";

  leaf.style.opacity = Math.random();

  document.body.appendChild(leaf);

}
