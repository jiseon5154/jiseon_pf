function Popup__isActived(no) {
  return $(`.popup-${no}`).hasClass(`active`);
}

function Popup__toggle(no) {
  if ( Popup__isActived(no) ) {
    Popup__hide(no);
  }
  else {
    Popup__show(no);
  }
}

function Popup__show(no) {
  $(`.popup-${no}`).addClass(`active`);
  $(`.btn-show-popup-${no}`).addClass(`active`);
  $(`.btn-toggle-popup-${no}`).addClass(`active`);

  $(`html`).addClass(`popup-${no}-actived`);
}

function Popup__hide(no) {
  $(`.popup-${no}`).removeClass(`active`);
  $(`.btn-show-popup-${no}`).removeClass(`active`);
  $(`.btn-toggle-popup-${no}`).removeClass(`active`);

  $(`html`).removeClass(`popup-${no}-actived`);
}

function Popup__init(no) {
  $(`.btn-show-popup-${no}`).click(function() {
    Popup__show(no);
  });

  $(`.btn-toggle-popup-${no}`).click(function() {
    Popup__toggle(no);
  });

  $(`.popup-${no}, .popup-${no} .popup__btn-close`).click(function() {
    Popup__hide(no);
  });

  $(`.popup-${no} .popup__content`).click(function() {
    return false;
  });
}

Popup__init(1);
Popup__init(2);

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