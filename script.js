


const togglecolor2 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("red-background");
};
const attachEventToChangeColorButton2 = function () {
  const changeColorButton = document.getElementById("red");
  changeColorButton.addEventListener("click", function () {
    togglecolor2();
  });
};


const togglecolor3 = function () {
  const bodyElement = document.body;
  bodyElement.classList.toggle("blue-background");
};
const attachEventToChangeColorButton3 = function () {
  const changeColorButton = document.getElementById("blue");
  changeColorButton.addEventListener("click", function () {
    togglecolor3();
  });
};

attachEventToChangeColorButton2();
attachEventToChangeColorButton3();



















