import Notiflix from 'notiflix';

const form = document.querySelector("form");

form.addEventListener("submit", onPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
