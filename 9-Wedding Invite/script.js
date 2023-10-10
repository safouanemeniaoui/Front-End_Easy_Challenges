let marriageDate = new Date("feb 14 2024 10:00:00").getTime();

let counter = setInterval(() => {
  let nowDate = new Date().getTime();
  let diffDate = marriageDate - nowDate;
  let mDay = document.querySelector(".mday");
  let mHour = document.querySelector(".mhour");
  let mMunite = document.querySelector(".mminute");
  let mSecond = document.querySelector(".msecond");

  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  mDay.innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  mHour.innerHTML = hours < 10 ? `0${hours}` : hours;
  let munites = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  mMunite.innerHTML = munites < 10 ? `0${munites}` : munites;
  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
  mSecond.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (diffDate <= 1000) {
    clearInterval(counter);
  }
}, 1000);
