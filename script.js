const animateBtn = document.getElementById("animate");
const screenshotBtn = document.getElementById("screenshot");
const randomBtn = document.getElementById("random");
const superRandomBtn = document.getElementById("super-random");
const input = document.getElementById("input");

animateBtn.addEventListener("click", animateCharacter);
screenshotBtn.addEventListener("click", takeScreenshot);
randomBtn.addEventListener("click", animateRandom);
superRandomBtn.addEventListener("click", animateSuperRandom);

function animateCharacter() {
  let character = input.value;
  let x = 0;
  let y = 0;
  let id = setInterval(frame, 10);

  function frame() {
    if (x === 200) {
      clearInterval(id);
    } else {
      x++;
      y++;
      input.style.left = x + "px";
      input.style.top = y + "px";
    }
  }
}

function animateRandom() {
  let character = input.value;
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);
  let id = setInterval(frame, 10);

  function frame() {
    if (x === 200) {
      clearInterval(id);
    } else {
      x++;
      y++;
      input.style.left = x + "px";
      input.style.top = y + "px";
    }
  }
}

function animateSuperRandom() {
  let characters = "😃🎉🎊🎁🎂🎈🎇🎆";
  let character = characters.charAt(Math.floor(Math.random() * characters.length));
  input.value = character;
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);
  let id = setInterval(frame, 10);

  function frame() {
    if (x === 200) {
      clearInterval(id);
    } else {
      x++;
      y++;
      input.style.left = x + "px";
      input.style.top = y + "px";
    }
  }
}

function takeScreenshot() {
  html2canvas(document.body).then(canvas => {
    let link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
