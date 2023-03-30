const Newyear = "01/01/2023";

function countDown() {
  const newYeardate = new Date(Newyear);
  const currentDate = new Date();

  const totalSeconds = (currentDate - newYeardate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours  = Math.floor(totalSeconds/3600)%24
  
  const minutes = Math.floor(totalSeconds/60)%60;
  
  const seconds =  Math.floor(totalSeconds)%60;
  console.log(seconds);

  document.getElementById("days").innerHTML = timeFormat(days);
  document.getElementById("hours").innerHTML = timeFormat(hours);
  document.getElementById("minutes").innerHTML = timeFormat(minutes);
  document.getElementById("seconds").innerHTML = timeFormat(seconds);


function timeFormat(time){
    return time <10 ?`0${time}`:time;
}

}

setInterval(countDown,1000);

