var overlay = document.querySelector('.modal-overlay');

var writeUs = document.querySelector('.write-us');
var openWriteUs = document.querySelector('.button--write-us');
var closeWriteUs = document.querySelector('.write-us__close');

var map = document.querySelector('.modal-map');
var openMap = document.querySelector('.map');
var closeMap = document.querySelector('.modal-map__close');

var form = writeUs.querySelector('form');
var username = writeUs.querySelector('[name=username]');
var email = writeUs.querySelector('[name=email]');
var mailBody = writeUs.querySelector('[name=mail-body]');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

var slides = document.querySelectorAll('.main-slider__slide');
var switches = document.querySelectorAll('.main-slider__switcher');

var services = document.querySelectorAll('.services__slide');
var servicesButtons = document.querySelectorAll('.services__button');
var servicesTabs = document.querySelectorAll('.services__tab');


/* Управление формой */

try {
  storageName = localStorage.getItem('username');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('submit', function(evt) {
  if (!username.value || !email.value || !mailBody.value) {
    evt.preventDefault();
    writeUs.classList.remove('modal--error');
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
    }
  }
});

/* Управление модальными окнами */

openWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUs.classList.add('modal--show');
  overlay.classList.add('modal-overlay--show');
  if (storageName && storageEmail) {
    username.value = storageName;
    email.value = storageEmail;
    mailBody.focus();
  } else if (storageName) {
    username.value = storageName;
    email.focus();
  } else {
    username.focus();
  }
});

closeWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  writeUs.classList.remove('modal--show');
  writeUs.classList.remove('modal--error');
  overlay.classList.remove('modal-overlay--show');
});

openMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('modal--show');
  overlay.classList.add('modal-overlay--show');
});

closeMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.remove('modal--show');
  overlay.classList.remove('modal-overlay--show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (writeUs.classList.contains('modal--show')) {
      evt.preventDefault();
      writeUs.classList.remove('modal--show');
      writeUs.classList.remove('modal--error');
      overlay.classList.remove('modal-overlay--show');
    }
    if (map.classList.contains('modal--show')) {
      evt.preventDefault();
      map.classList.remove('modal--show');
      overlay.classList.remove('modal-overlay--show');
    }
  }
});

overlay.addEventListener('click', function(evt) {
  if (writeUs.classList.contains('modal--show')) {
    evt.preventDefault();
    writeUs.classList.remove('modal--show');
    writeUs.classList.remove('modal--error');
    overlay.classList.remove('modal-overlay--show');
  }
  if (map.classList.contains('modal--show')) {
    evt.preventDefault();
    map.classList.remove('modal--show');
    map.classList.remove('modal--error');
    overlay.classList.remove('modal-overlay--show');
  }
});

/* Управление формой */

try {
  storageName = localStorage.getItem('username');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('submit', function(evt) {
  if (!username.value || !email.value || !mailBody.value) {
    username.classList.remove('write-us__form--invalid');
    email.classList.remove('write-us__form--invalid');
    mailBody.classList.remove('write-us__form--invalid');
    evt.preventDefault();
    writeUs.classList.remove('modal--error');
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add('modal--error');
    if (!username.value) {
      username.classList.add('write-us__form--invalid');
    }
    if (!email.value) {
      email.classList.add('write-us__form--invalid');
    }
    if (!mailBody.value) {
      mailBody.classList.add('write-us__form--invalid');
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('email', email.value);
    }
  }
});

/* Переключение основного слайдера */

for (var i = 0; i < switches.length; i++) {
  switches[i].addEventListener('click', function() {
    for (var j = 0; j < slides.length; j++) {
      slides[j].classList.remove('main-slider__slide--visible');
    }
    if (switches[1].checked) {
      slides[1].classList.add('main-slider__slide--visible');
    } else if (switches[2].checked) {
      slides[2].classList.add('main-slider__slide--visible');
    } else {
      slides[0].classList.add('main-slider__slide--visible');
    }
  });
}

var isButtonClicked = function (buttonNum) {
  servicesButtons[buttonNum].addEventListener('click', function(evt) {
    evt.preventDefault();
    for (var j = 0; j < services.length; j++) {
      servicesButtons[j].classList.remove('services__button--current');
      services[j].classList.remove('services__slide--shown');
    }
    servicesButtons[buttonNum].classList.add('services__button--current');
    services[buttonNum].classList.add('services__slide--shown');
  });
};

isButtonClicked(0);
isButtonClicked(1);
isButtonClicked(2);


