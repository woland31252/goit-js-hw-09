import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const input = document.getElementById("datetime-picker");
// const refs = {
//   button: document.querySelector("[data-start]"),
//   day: document.querySelector("[data-days]"),
//   hour: document.querySelector("[data-hours]"),
//   minute: document.querySelector("[data-minutes]"),
//   second: document.querySelector("[data-seconds]"),
// };

// input.addEventListener("input", onNumberData);
button.addEventListener("click", onStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(options.defaultDate);
    if (selectedDates[0] < options.defaultDate) {
      alert('Please choose a date in the future');
      return;
    }
  },
};

const fp = flatpickr(input, options);
// const timerID = setInterval(convertMs, 1000)
// function onTimerDate() {
//   timer = setInterval(() => {
//     document.body.style.backgroundColor = convertMs;
//   }, 1000);
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
// }

function onStart() {
  options.defaultDate = setInterval(convertMs, 1000)
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
  return { days, hours, minutes, seconds};
}


console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const a = 3;
const b = 4;
console.log(a + b);
