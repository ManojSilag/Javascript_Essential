const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var interval = setInterval(runClock, 1000);

var date = new Date();
const HRDATE = date.getHours();
const MINDATE = date.getMinutes();
const SECDATE = date.getSeconds();

let hrPosition = (HRDATE * 360) / 12 + (MINDATE * (360 / 60)) / 12;
let minPostion = (MINDATE * 360) / 60 + (SECDATE * (360 / 60)) / 60;
let secPostion = (SECDATE * 360) / 60;

function runClock() {
 
    hrPosition = hrPosition + (3/360);
    minPostion = minPostion + (6/60); 
    secPostion = secPostion + 6; 
  HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
  MINUTEHAND.style.transform = `rotate(${minPostion}deg)`;
  SECONDHAND.style.transform = `rotate(${secPostion}deg)`;
}
