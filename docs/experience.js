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
  gsap.from('.ex-2_image1', {
    ease: Expo.easeIn,
    opacity:0,
    x:0,
    duration:1.2,
    scrollTrigger:{
      trigger:'.ex-2_image1',
      start:'0 85%'
    }
  });
  
  gsap.from('.ex-3_image1', {
    ease: Expo.easeIn,
    opacity:0,
    x:0,
    duration:1.2,
    scrollTrigger:{
      trigger:'.ex-3_image1',
      start:'0 85%'
    }
  });
  
  gsap.from('.ex-4_image1', {
    ease: Expo.easeIn,
    opacity:0,
    x:0,
    duration:1.2,
    scrollTrigger:{
      trigger:'.ex-4_image1',
      start:'0 85%'
    }
  });
}

Ab1__init();