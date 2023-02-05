import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// const input = document.getElementById("datetime-picker");
const refs = {
  input: document.getElementById('datetime-picker'),
  button: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};
const interval = null;
const selectedDate = Date.now;
// input.addEventListener("input", onNumberData);
refs.button.addEventListener("click", timerOn);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     selectedDate = selectedDates[0];
//     if (selectedDate < new Date()) {
//       alert('Please choose a date in the future');
//       return;
//     }
//   },
// };

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates;
    if (selectedDate < new Date()) {
      alert('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', true);
    } else {
      refs.startBtn.removeAttribute('disabled', '');
    }
  },
};

const fp = flatpickr(refs.input, options);
// const timerID = setInterval(convertMs, 1000)
// function onTimerDate() {
//   timer = setInterval(() => {
//     document.body.style.backgroundColor = convertMs;
//   }, 1000);
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
// }

function timerOn() {
  
  setInterval(() => {
    const currentDate = Date.now;
    const deltaTime = selectedDate - currentDate;
    const timeConponent = convertMs(deltaTime);
    console.log(timeConponent);
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  // return timer .field >'[data-days]'.textContent(`${days}`)
  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const a = 3;
const b = 4;
console.log(a + b);


// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// // import Notiflix from 'notiflix';

// const INTERVAL__TIME = 1000;
// const refs = {
//   inputText: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// let interval = null;
// let selectedDate = Date.now();

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     selectedDate = selectedDates[0];
//     if (selectedDates[0] < new Date()) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       refs.startBtn.setAttribute('disabled', true);
//     } else {
//       refs.startBtn.removeAttribute('disabled', '');
//     }
//   },
// };
// flatpickr('input#datetime-picker', options);

// refs.startBtn.addEventListener('click', startCountdown);

// function startCountdown() {
//   refs.startBtn.setAttribute('disabled', '');
//   refs.inputText.setAttribute('disabled', '');
//   interval = setInterval(timeOut, INTERVAL__TIME);
// }

// function timeOut() {
//   const getTimeComponents = selectedDate - new Date();

//   if (getTimeComponents <= 0) {
//     Notiflix.Notify.success('Timer is Over!');
//     clearInterval(interval);
//     return;
//   }

//   const { days, hours, minutes, seconds } = convertMs(getTimeComponents);

//   refs.days.textContent = pad(days);
//   refs.hours.textContent = pad(hours);
//   refs.minutes.textContent = pad(minutes);
//   refs.seconds.textContent = pad(seconds);
// }

// function pad(value) {
//   return String(value).padStart(2, 0);
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }