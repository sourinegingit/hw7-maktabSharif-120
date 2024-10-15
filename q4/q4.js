const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];

const toggleBtn = () => {
  resetButton.classList.remove("hidden");
  lapButton.classList.remove("hidden");
};
let minCounter = 0;
let min;

let secCounter = 0;
let sec;

let centisecCounter = 0;
let centisec;

let isplay = false;
const paly = () => {
  if (!isplay) {
    playButton.innerHTML = "توقف";
    min = setInterval(() => {
      minute.innerHTML = `${minCounter++}: `;
    }, 60 * 1000);

    sec = setInterval(() => {
      if (secCounter === 60) {
        secCounter = 0;
      }
      second.innerHTML = `${++secCounter}:`;
    }, 1000);

    centisec = setInterval(() => {
      if (centisecCounter === 100) {
        centisecCounter = 0;
      }
      centiSecond.innerHTML = `${++centisecCounter}` ;
    }, 10);

    isplay = true;
  } else {
    playButton.innerHTML = "شروع";
    clearInterval(sec);
    clearInterval(centisec);
    clearInterval(min);
    isplay = false;
  }
  toggleBtn();
};

const reset = () => {
  paly();
  second.innerHTML = "0 ";
  centiSecond.innerHTML = "0";
  minute.innerHTML = "0:";
};

const lap = () => {
  const li = document.createElement("li");
  const timeStamp = document.createElement("span");
  li.setAttribute("class", "laps-item");
  timeStamp.setAttribute("class", "time-stamp");
  timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centisecCounter}`;
  li.append(timeStamp)
  laps.append(li);
};

lapButton.addEventListener("click", lap);
resetButton.addEventListener("click", reset);
playButton.addEventListener("click", paly);






















































// const playButton = document.getElementsByClassName("play")[0];
// const resetButton = document.getElementsByClassName("reset")[0];
// const lapButton = document.getElementsByClassName("lap")[0];
// const minute = document.getElementsByClassName("minute")[0];
// const second = document.getElementsByClassName("sec")[0];
// const centiSecond = document.getElementsByClassName("msec")[0];
// const laps = document.getElementsByClassName("laps")[0];

// const toggleButton = () => {
//   lapButton.classList.remove("hidden");
//   resetButton.classList.remove("hidden");
// };

// let isPlay = false;

// let sec;
// let secCounter = 0;

// let centisec;
// let centicounter = 0;

// let min;
// let minCounter = 0;

// let isReset = false;
// let lapItem = 0;
// const play = () => {
//   if (!isPlay && !isReset) {
//     playButton.innerHTML = "pause";

//     min = setInterval(() => {
//       minute.innerHTML = `${minCounter++} :`;
//     }, 1000);

//     sec = setInterval(() => {
//       if (secCounter === 60) {
//         secCounter = 0;
//       }
//       second.innerHTML = `${++secCounter} :&nbsp;`;
//     }, 1000);

//     centisec = setInterval(() => {
//       if (centicounter === 100) {
//         centicounter = 0;
//       }
//       centiSecond.innerHTML = `${++centicounter} `;
//     }, 10);
//     isPlay = true;
//     isReset = true;
//   } else {
//     playButton.innerHTML = "play";
//     clearInterval(sec);
//     clearInterval(centisec);
//     clearInterval(min);
//     isPlay = false;
//     isReset = false;
//   }
//   toggleButton();
// };

// const reset = () => {
//   isReset = true;
//   play();
//   resetButton.classList.add("hidden");
//   lapButton.classList.add("hidden");
//   second.innerHTML = "0 ";
//   centiSecond.innerHTML = "0";
//   minute.innerHTML = "0:";
// };

// const lap = () => {
//   const li = document.createElement("li");
//   const number = document.createElement("span");
//   const timeStamp = document.createElement("span");
//   li.setAttribute("class", "laps-item");
//   number.setAttribute("class", "number");
//   timeStamp.setAttribute("class", "time-stamp");
//   number.innerText = `#${++lapItem}`;
//   timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centicounter}`;
//   li.append(number, timeStamp);
//   laps.append(li);
// };

// // let sec=0;
// // const playSec=()=>{
// //     setInterval(()=>{
// //         second.innerHTML=sec++
// //     },1000)
// // }

// playButton.addEventListener("click", play);
// resetButton.addEventListener("click", reset);
// lapButton.addEventListener("click", lap);
// console.log(playButton);
