function mixImg(){
    const picturesPortfolioContainer = document.querySelector(".picturesPortfolio .imgWrapper");
    const imgItems = [...document.querySelectorAll(".imgPortfolio")];
    imgItems.sort(() => Math.random() - 0.5);
    picturesPortfolioContainer.innerHTML = "";
    imgItems.forEach((element) => {
        picturesPortfolioContainer.appendChild(element);
    });
}

document.querySelector(".buttonWrapper").addEventListener("click", mixImg);