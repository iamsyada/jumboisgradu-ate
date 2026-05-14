// MUSIC
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

  if(!playing){

    music.play();

    musicBtn.innerHTML = "❚❚";

    playing = true;

  } else {

    music.pause();

    musicBtn.innerHTML = "▶";

    playing = false;

  }

});


// LEAVES EFFECT
const totalLeaves = 25;

for(let i = 0; i < totalLeaves; i++){

  const leaf = document.createElement("div");

  leaf.classList.add("leaf");

  leaf.innerHTML = "🍃";

  leaf.style.left = Math.random() * 100 + "vw";

  leaf.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  leaf.style.fontSize =
    (Math.random() * 20 + 15) + "px";

  leaf.style.opacity = Math.random();

  document.body.appendChild(leaf);

}
