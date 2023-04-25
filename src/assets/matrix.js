function getRandomPosition(element) {
  let x = document.documentElement.clientWidth;
  let y = document.documentElement.clientHeight;
  let posX = Math.floor(Math.random() * x);
  let posY = Math.floor(Math.random() * y);
  return { x: posX, y: posY };
}

function createBinaryElement() {
  let binaryElement = document.createElement("div");
  binaryElement.classList.add("binary");
  binaryElement.textContent = generateBinary();
  let position = getRandomPosition(binaryElement);
  binaryElement.style.left = position.x + "px";
  binaryElement.style.top = position.y + "px";
  return binaryElement;
}

function generateBinary() {
  let length = Math.floor(Math.random() * 9) + 4; // Generate a random length between 8 and 16.
  let binaryString = "";
  for (let i = 0; i < length; i++) {
    binaryString += Math.floor(Math.random() * 2);
  }
  return binaryString;
}

function typeOutBinary(element, binaryString, index = 0) {
  if (index < binaryString.length) {
    element.textContent += binaryString[index];
    setTimeout(() => {
      typeOutBinary(element, binaryString, index + 1);
    }, 100);
  }
}

function animateBinary() {
  let binaryElement = createBinaryElement();
  document.body.appendChild(binaryElement);
  let binaryString = generateBinary();
  setTimeout(() => {
    binaryElement.style.opacity = 1;
    typeOutBinary(binaryElement, binaryString);
  }, 10);
  setTimeout(() => {
    binaryElement.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(binaryElement);
    }, 5000); // Change this value to control how long the string stays visible after fading starts.
  }, 10000); // Change this value to control how long the string stays on the screen before fading.
}

setInterval(animateBinary, 1500);