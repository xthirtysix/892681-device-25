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

/* Управление модальными окнами */

openWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  username.focus();
  if (storageName) {
    username.value = storageName;
    email.focus();
  }
  if (storageEmail) {
    email.value = storageEmail;
    mailBody.focus();
  } else {
    username.focus();
  }
  writeUs.classList.add('modal--show');
  overlay.classList.add('modal-overlay--show');
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


