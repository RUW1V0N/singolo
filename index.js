function transformClassList(
  target,
  focusClassEl,
  previousFocusedElement,
  operationType = "toggle"
) {
  target.classList[operationType](focusClassEl);
  previousFocusedElement?.classList.remove(focusClassEl);
}

function portfolioButtonClickHandler(event) {
  const focusClassEl = "focusButtonPortfolio";
  const previousFocusedElement = document.querySelector(`.${focusClassEl}`);
  const target = event.target;
  if (target.classList.contains(focusClassEl)) {
    return;
  }
  transformClassList(target, focusClassEl, previousFocusedElement, "add");
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
  const focusClassEl = "focusImgPortfolio";
  const target = event.target;
  const previousFocusedElement = document.querySelector(`.${focusClassEl}`);
  transformClassList(target, focusClassEl, previousFocusedElement);
}

document.querySelector(".imgWrapper").addEventListener("click", selectImage);
