const btn = document.querySelectorAll("button");

const sound = [
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
  "snare.mp3",
  "crash.mp3",
  "kick-bass.mp3",
];

for (let i = 0; i < btn.length; i++) {
  document;
  btn[i].addEventListener("click", function hadleClick() {
    // alert("i got clicked");

    const mysound = new Audio("sounds/" + sound[i]);
    mysound.play();

    // btn[i].classList.add("active");
  });
}

// document.addEventListener("click", function (e) {});

// debugger;

document.addEventListener("keypress", function (e) {
  // alert("You key some keyboard");
  const btnActive = document.querySelector("." + e.key);

  btnActive.classList.add("active");
  setTimeout(() => {
    btnActive.classList.remove("active");
  }, 100);
  // btnActive.classList.remove("active");
  switch (e.key) {
    case "w":
      {
        const mysound = new Audio("sounds/" + sound[0]);
        mysound.play();
      }
      break;
    case "a":
      {
        const mysound = new Audio("sounds/" + sound[1]);
        mysound.play();
      }
      break;
    case "s":
      {
        const mysound = new Audio("sounds/" + sound[2]);
        mysound.play();
      }
      break;
    case "d":
      {
        const mysound = new Audio("sounds/" + sound[3]);
        mysound.play();
      }
      break;
    case "j":
      {
        const mysound = new Audio("sounds/" + sound[4]);
        mysound.play();
      }
      break;
    case "k":
      {
        const mysound = new Audio("sounds/" + sound[5]);
        mysound.play();
      }
      break;
    case "l":
      {
        const mysound = new Audio("sounds/" + sound[6]);
        mysound.play();
      }
      break;
    default:
      console.log("test");
  }
});
