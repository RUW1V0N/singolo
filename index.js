function portfolioButtonClickHandler(event) {
  const buttonsPortfolio = [...document.querySelectorAll(".buttonPortfolio")];
  const target = event.target;
  const focusButtonPortfolio = "focusButtonPortfolio";
  if (target.classList.contains(focusButtonPortfolio)) {
    return;
  }
  buttonsPortfolio.forEach((element) => {
    element.classList.remove(focusButtonPortfolio);
  });
  target.classList.add(focusButtonPortfolio);
  mixImg();
}

function mixImg() {
  const picturesPortfolioContainer = document.querySelector(
    ".picturesPortfolio .imgWrapper"
  );
  const imgItems = [...document.querySelectorAll(".imgPortfolio")];
  imgItems.sort(() => Math.random() - 0.5);
  picturesPortfolioContainer.innerHTML = "";
  imgItems.forEach((element) => {
    picturesPortfolioContainer.appendChild(element);
  });
}

document
  .querySelector(".buttonWrapper")
  .addEventListener("click", portfolioButtonClickHandler);

function selectImage(event) {
  const imgPortfolio = [...document.querySelectorAll(".focusImgPortfolio")];
  const target = event.target;
  const focusImgPortfolio = "focusImgPortfolio";
  target.classList.toggle(focusImgPortfolio);
  if (imgPortfolio[0]) {
    imgPortfolio[0].classList.remove(focusImgPortfolio);
  }
}

document.querySelector(".imgWrapper").addEventListener("click", selectImage);
