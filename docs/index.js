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

  $(`.popup-${no} .popup__content`).click(function(e) {
    e.stopPropagation();
    //e.preventDefault();
  });
}

Popup__init(1);
Popup__init(2);