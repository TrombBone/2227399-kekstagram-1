const ESCAPE_KEYCODE = 'Escape';

const documentBody = document.querySelector('body');

const checkStringLength = (string, maxLen) => string.length <= maxLen;

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomPositiveInteger = function(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const counterContainer = function (startCount = 0) {
  let i = startCount;
  return () => i++;
};

// Функция взята из интернета и доработана
// Источник - https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const shuffle = function(arr) {
  return arr.sort(() => Math.random() - 0.5);
};

const isESCKey = (keyCode) => keyCode === ESCAPE_KEYCODE;

const showErrorAlert = (message) => {
  const alertContainer = document.createElement('div');
  const alertBlock = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.backgroundColor = 'rgba(95,86,32,0.62)';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.bottom = '0';
  alertContainer.style.right = '0';
  alertContainer.style.width = '100%';
  alertContainer.style.height = '100%';
  alertContainer.style.display = 'flex';
  alertContainer.style.justifyContent = 'center';
  alertContainer.style.alignItems = 'center';
  alertBlock.style.padding = '5%';
  alertBlock.style.position = 'relative';
  alertBlock.style.display = 'flex';
  alertBlock.style.justifyContent = 'center';
  alertBlock.style.alignItems = 'center';
  alertBlock.style.width = '50%';
  alertBlock.style.height = '50%';
  alertBlock.style.fontSize = '20px';
  alertBlock.style.lineHeight = '1.5';
  alertBlock.style.textAlign = 'center';
  alertBlock.style.backgroundColor = '#3c3614';
  alertBlock.style.Color = '#ffe753';
  alertBlock.style.borderRadius = '10px';
  alertBlock.textContent = message;

  alertContainer.appendChild(alertBlock);
  documentBody.appendChild(alertContainer);
};

export {getRandomPositiveInteger, counterContainer, shuffle, checkStringLength, isESCKey, showErrorAlert};
