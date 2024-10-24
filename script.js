const CAROUSEL_LENGTH = 6;
let current = 0;
const $carousel = document.querySelector("#modal-product");
const $prevButton = document.querySelector(".prev-button");
const $nextButton = document.querySelector(".next-button");

const nextEvent = () => {
    if (current < CAROUSEL_LENGTH) {
        current++;
    }
    $carousel.style.transform = `translateX(${-current * 300}px)`; // 450px 이동 (상품 하나의 넓이)
};

const prevEvent = () => {
    if (current > 0) {
        current--;
    }
    $carousel.style.transform = `translateX(${-current * 300}px)`; // 450px 이동 (상품 하나의 넓이)
};

$nextButton.addEventListener("click", nextEvent);
$prevButton.addEventListener("click", prevEvent);
