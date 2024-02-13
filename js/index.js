

document.addEventListener('DOMContentLoaded', function () {

    // slider 1 with autoplay

    var stagesPrev = document.querySelector('.stages-prev');
    var stagesNext = document.querySelector('.stages-next');
    var stagesWrapper = document.querySelector('.stages__wrapper');
    var stagesSlides = document.querySelectorAll('.stages__slide');
    var stagesSlidesCount = stagesSlides.length;
    var stagesSlideMoveCounter = 1;
    var dots = document.querySelector('.dots');
    var dotsArray = [];
    var slideWidth = stagesSlides[0].offsetWidth;
    for(i=0; i<=stagesSlides.length-1; i++) {
        dotsArray.push('<div class="dot"></div>');
    }
    dots.innerHTML = dotsArray.join('');
    var dot = document.querySelectorAll('.dot');
    
    dot[0].classList.add('active');

    var stagesCurrentOffset = 0;

    function slideForward() {
        if (stagesSlideMoveCounter < stagesSlidesCount) {
            stagesCurrentOffset -= slideWidth + 20;
            stagesWrapper.style.transform = 'translateX(' + stagesCurrentOffset + 'px)';
            dot[stagesSlideMoveCounter-1].classList.remove('active');
            dot[stagesSlideMoveCounter].classList.add('active');
            ++stagesSlideMoveCounter;
            
            if ( stagesSlideMoveCounter == stagesSlidesCount ) {
                stagesNext.classList.add('disabled');
            }
            if ( stagesSlideMoveCounter == 2 ) {
                stagesPrev.classList.remove('disabled')
            }
        }
    }

    function slideBackward() {
        if (stagesSlideMoveCounter > 1) {
            stagesCurrentOffset += slideWidth + 20;
            stagesWrapper.style.transform = 'translateX(' + stagesCurrentOffset + 'px)';
            dot[stagesSlideMoveCounter-1].classList.remove('active');
            dot[stagesSlideMoveCounter-2].classList.add('active');

            --stagesSlideMoveCounter;
            if ( stagesSlideMoveCounter == stagesSlidesCount - 1 ) {
                stagesNext.classList.remove('disabled');
            }
            if ( stagesSlideMoveCounter == 1 ) {
                stagesPrev.classList.add('disabled')
            }
        }
    }

    let intervalId; 
    let isSliderActive = false; 

    function checkResolution() {
        const windowWidth = window.innerWidth;
        slideWidth = stagesSlides[0].offsetWidth;
        stagesWrapper.style.transform = 'translateX(0px)';
        stagesCurrentOffset = 0;
        stagesSlideMoveCounter = 1;
        for (var i = 1; i < dots.length; i++) {
            dots[i].classList.remove('active');
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
    
    window.addEventListener('resize', checkResolution);
    

    stagesNext.addEventListener('click', function() {
    
        slideForward();
        
    })

    stagesPrev.addEventListener('click', function() {

        slideBackward()
        
    })


      
    // slider 2


    var membersPrev = document.querySelector('.members-prev');
    var membersNext = document.querySelector('.members-next');
    var sliderWrapper = document.querySelector('.members-slider__wrapper');
    var slides = document.querySelectorAll('.members-slide');
    var slidesCountEl = document.querySelector('.total-count');
    var slidesCurrEl = document.querySelector('.current-slide');
    var slidesCount = slides.length;
    var slideMoveCounter = 1;
    slidesCountEl.innerHTML = slidesCount;

    var currentOffset = 0;

    membersNext.addEventListener('click', function() {

        if (slideMoveCounter < slidesCount) {
            currentOffset -= slides[0].offsetWidth;
            sliderWrapper.style.transform = 'translateX(' + currentOffset + 'px)';
            ++slideMoveCounter;
            slidesCurrEl.innerHTML = slideMoveCounter;
            if ( slideMoveCounter == slidesCount ) {
                membersNext.classList.add('disabled');
            }
            if ( slideMoveCounter == 2 ) {
                membersPrev.classList.remove('disabled')
            }
        }
        
    })

    membersPrev.addEventListener('click', function() {
        if (slideMoveCounter > 1) {
            currentOffset += slides[0].offsetWidth;
            sliderWrapper.style.transform = 'translateX(' + currentOffset + 'px)';
            --slideMoveCounter;
            slidesCurrEl.innerHTML = slideMoveCounter;
            if ( slideMoveCounter == slidesCount - 1 ) {
                membersNext.classList.remove('disabled');
            }
            if ( slideMoveCounter == 1 ) {
                membersPrev.classList.add('disabled')
            }
        }
        
    })
    
  });