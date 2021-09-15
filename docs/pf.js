function Popup__isActived(no) {
  return $(`.popup-${no}`).hasClass(`active`);
}

function Popup__toggle(no) {
  if (Popup__isActived(no)) {
    Popup__hide(no);
  } else {
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
  $(`.btn-show-popup-${no}`).click(function () {
    Popup__show(no);
  });

  $(`.btn-toggle-popup-${no}`).click(function () {
    Popup__toggle(no);
  });

  $(`.popup-${no}, .popup-${no} .popup__btn-close`).click(function () {
    Popup__hide(no);
  });

  $(`.popup-${no} .popup__content`).click(function () {
    e.stopPropagation();
    //e.preventDefault();
  });
}

Popup__init(1);
Popup__init(2);

/* 이미지 프리로드 함수 */
function preloading(imageArray) {
  let n = imageArray.length;
  for (let i = 0; i < n; i++) {
    let img = new Image();
    img.src = imageArray[i];
  }
}

/* 이미지 프리로드 */
preloading([
  'https://picsum.photos/id/137/1000/1500',
  'https://picsum.photos/id/118/1000/1500',
  'https://picsum.photos/id/139/1000/1500',
  'https://picsum.photos/id/140/1000/1500',
  'https://picsum.photos/id/141/1000/1500'
]);

function Part__showPart(no) {
  // 기존에 활성화 된 녀석들 제거
  $('.part.active').removeClass('active');
  $('.part.part-' + no).addClass('active');
}