let sliderItems = Array.from(
  document.querySelectorAll(`.slider-container img`)
);
let slidesNumber = sliderItems.length;
let currentSlide = 1;
let TheslideNumber = document.getElementById(`slide-number`);
let nextButton = document.getElementsByClassName(`next`)[0];
let previousButton = document.getElementsByClassName(`prev`)[0];
nextButton.onclick = nextSlide;
previousButton.onclick = prevSlide;
let paginationElement = document.createElement(`ul`);
paginationElement.setAttribute("id", "pagination-ul");
for (i = 1; i <= slidesNumber; i++) {
  let paginationItem = document.createElement(`li`);
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.append(paginationItem);
}
let indicators = document.querySelector(`.indicators`);
indicators.append(paginationElement);
let paginationNewUl = document.getElementById(`pagination-ul`);
let bulletsItems = Array.from(document.querySelectorAll(`#pagination-ul li`));
theChecker();
function nextSlide() {
  currentSlide++;
  theChecker();
}
function prevSlide() {
    currentSlide--;
    theChecker();
}
function theChecker() {
  removeAllActive();
  TheslideNumber.textContent = `Slide #` + currentSlide + ` of ` + slidesNumber;
  sliderItems[currentSlide - 1].classList.add(`active`);
  paginationNewUl.children[currentSlide - 1].classList.add(`active`);
  if (currentSlide === 1) {
    previousButton.classList.add(`disabled`);
  } else {
    previousButton.classList.remove(`disabled`);
  }
  if (currentSlide === slidesNumber) {
    nextButton.classList.add(`disabled`);
  } else {
    nextButton.classList.remove(`disabled`);
  }
}
function removeAllActive() {
  sliderItems.forEach(function (Item) {
    Item.classList.remove(`active`);
  });
  bulletsItems.forEach(function (bullet) {
    bullet.classList.remove(`active`);
  });
}
for (let i = 0; i < bulletsItems.length; i++) {
    bulletsItems[i].onclick = function () {
        currentSlide = parseInt(bulletsItems[i].getAttribute(`data-index`));
        theChecker()
    }
}