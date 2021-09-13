function Section1__init() {
  const tl = gsap.timeline({
    repeat:-1,
    repeatDelay:5
  });

  tl.from(".txt-box > .txt-2 > span", {
    opacity: 0,
    position:'absolute',
    visibility:'hidden',
    stagger: {
      amount:1
    }
  });
}

Section1__init();

function BtnGoTop__init() {
  const $btnGoTopBox = $('.btn-go-top-box');

  $(window).scroll(function() {
    const scrollTop = $(window).scrollTop();

    if ( scrollTop > 500 ) {
      $btnGoTopBox.addClass('active');
    }
    else {
      $btnGoTopBox.removeClass('active');
    }
  });
}

BtnGoTop__init();

function Ab1__init() {
  gsap.from('.ab-1', {
    ease: Expo.easeIn,
    opacity:0,
    x:0,
    duration:1.2,
    scrollTrigger:{
      trigger:'.ab-1',
      start:'0 85%'
    }
  });
  
  gsap.from('.ab-2', {
    ease: Expo.easeIn,
    opacity:0,
    x:0,
    duration:1.2,
    scrollTrigger:{
      trigger:'.ab-2',
      start:'0 85%'
    }
  });
  
  gsap.from('.ab-5', {
    ease: Expo.easeIn,
    opacity:0,
    x:0,
    duration:1.2,
    scrollTrigger:{
      trigger:'.ab-5',
      start:'0 85%'
    }
  });
}

Ab1__init();