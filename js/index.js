document.addEventListener("DOMContentLoaded", function () {
  // slider 1 with autoplay

  let stagesPrev = document.querySelector(".stages-prev");
  let stagesNext = document.querySelector(".stages-next");
  let stagesWrapper = document.querySelector(".stages__wrapper");
  let stagesSlides = document.querySelectorAll(".stages__slide");
  let stagesSlidesCount = stagesSlides.length;
  let stagesSlideMoveCounter = 1;
  let dots = document.querySelector(".dots");
  let dotsArray = [];
  let slideWidth = stagesSlides[0].offsetWidth;
  for (i = 0; i <= stagesSlides.length - 1; i++) {
    dotsArray.push('<div class="dot"></div>');
  }
  dots.innerHTML = dotsArray.join("");
  let dot = document.querySelectorAll(".dot");

  dot[0].classList.add("active");

  let stagesCurrentOffset = 0;

  function slideForward() {
    if (stagesSlideMoveCounter < stagesSlidesCount) {
      stagesCurrentOffset -= slideWidth + 20;
      stagesWrapper.style.transform =
        "translateX(" + stagesCurrentOffset + "px)";
      dot[stagesSlideMoveCounter - 1].classList.remove("active");
      dot[stagesSlideMoveCounter].classList.add("active");
      ++stagesSlideMoveCounter;

      if (stagesSlideMoveCounter == stagesSlidesCount) {
        stagesNext.classList.add("disabled");
      }
      if (stagesSlideMoveCounter == 2) {
        stagesPrev.classList.remove("disabled");
      }
    }
  }

  function slideBackward() {
    if (stagesSlideMoveCounter > 1) {
      stagesCurrentOffset += slideWidth + 20;
      stagesWrapper.style.transform =
        "translateX(" + stagesCurrentOffset + "px)";
      dot[stagesSlideMoveCounter - 1].classList.remove("active");
      dot[stagesSlideMoveCounter - 2].classList.add("active");

      --stagesSlideMoveCounter;
      if (stagesSlideMoveCounter == stagesSlidesCount - 1) {
        stagesNext.classList.remove("disabled");
      }
      if (stagesSlideMoveCounter == 1) {
        stagesPrev.classList.add("disabled");
      }
    }
  }

  let intervalId;
  let isSliderActive = false;

  function checkResolution() {
    const windowWidth = window.innerWidth;
    slideWidth = stagesSlides[0].offsetWidth;
    stagesWrapper.style.transform = "translateX(0px)";
    stagesCurrentOffset = 0;
    stagesSlideMoveCounter = 1;
    for (let i = 1; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    if (windowWidth < 576 && !isSliderActive) {
      intervalId = setInterval(slideForward, 4000);
      isSliderActive = true;
    } else if (windowWidth >= 576 && isSliderActive) {
      clearInterval(intervalId);
      isSliderActive = false;
    }
  }

  checkResolution();

  window.addEventListener("resize", checkResolution);

  stagesNext.addEventListener("click", function () {
    slideForward();
  });

  stagesPrev.addEventListener("click", function () {
    slideBackward();
  });

  // slider 2

  let membersPrev = document.querySelector(".members-prev");
  let membersNext = document.querySelector(".members-next");
  let sliderWrapper = document.querySelector(".members-slider__wrapper");
  let slides = document.querySelectorAll(".members-slide");
  let slidesCountEl = document.querySelector(".total-count");
  let slidesCurrEl = document.querySelector(".current-slide");
  let slidesCount = slides.length;
  let slideMoveCounter = 1;
  slidesCountEl.innerHTML = slidesCount;

  let currentOffset = 0;

  membersNext.addEventListener("click", function () {
    if (slideMoveCounter < slidesCount) {
      currentOffset -= slides[0].offsetWidth;
      sliderWrapper.style.transform = "translateX(" + currentOffset + "px)";
      ++slideMoveCounter;
      slidesCurrEl.innerHTML = slideMoveCounter;
      if (slideMoveCounter == slidesCount) {
        membersNext.classList.add("disabled");
      }
      if (slideMoveCounter == 2) {
        membersPrev.classList.remove("disabled");
      }
    }
  });

  membersPrev.addEventListener("click", function () {
    if (slideMoveCounter > 1) {
      currentOffset += slides[0].offsetWidth;
      sliderWrapper.style.transform = "translateX(" + currentOffset + "px)";
      --slideMoveCounter;
      slidesCurrEl.innerHTML = slideMoveCounter;
      if (slideMoveCounter == slidesCount - 1) {
        membersNext.classList.remove("disabled");
      }
      if (slideMoveCounter == 1) {
        membersPrev.classList.add("disabled");
      }
    }
  });
});
