(function newTimer() {
  window.setInterval(() => {
    let time = document.getElementById("time");

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    month = month < 10 ? "0" + month : month;
    day = hours < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let conclusion = `${year}:${month}:${day}:${hours}:${minutes}:${seconds}`;
    time.innerText = conclusion;
  }, 1000);
})();
let timers = document.querySelectorAll(".timers");
let downBtn = document.getElementById("btnD");
downBtn.addEventListener("click", (event) => {
  event.preventDefault();
  timers[0].classList.add("up");
});

(function newYearTimer() {
  window.setInterval(() => {
    let time = document.getElementById("timeY");
    let date = new Date(2023, 0, 1, 0, 0, 0, 0);
    let now = new Date();
    let remains = date - now;

    let days = Math.floor(remains / 1000 / 60 / 60 / 24);
    let hours = Math.floor(remains / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(remains / 1000 / 60) % 60;
    let seconds = Math.floor(remains / 1000) % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("day").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  });
})();
let upBtn = document.getElementById("btnU");
upBtn.addEventListener("click", (event) => {
  event.preventDefault();
  timers[0].classList.remove("up");
});
