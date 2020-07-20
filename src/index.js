const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
let interValId = null;

const colorSwitch = () => {
  let color = randomIntegerFromInterval(0, colors.length - 1);
  bodyRef.style.backgroundColor = colors[color];
  console.log(`${bodyRef.style.backgroundColor} is applied`);
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startHandler = () => {
  interValId = setInterval(colorSwitch, 1000);
  btnStart.disabled = true;
};

const stopHandler = () => {
  clearInterval(interValId);
  btnStart.disabled = false;
};

btnStart.addEventListener('click', startHandler);
btnStop.addEventListener('click', stopHandler);
