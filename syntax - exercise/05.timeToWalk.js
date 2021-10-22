function time(steps, length, speed) {
    function TimeToWalk(arg1, arg2, arg3) {
        let stepsNumber = Number(arg1);
        let stepsMetersHr = Number(arg2);
        let studentSpeed = Number(arg3);
      
        let distanceMeters = stepsNumber * stepsMetersHr;
        let speedMetersSec = studentSpeed / 3.6;
        let time = distanceMeters / speedMetersSec;
        let rest = Math.floor(distanceMeters / 500);
      
        let timeMin = Math.floor(time / 60);
        let timeSec = Math.round(time - (timeMin * 60));
        let timeHr = Math.floor(time / 3600);
      
        //console.log(distanceMeters);
        //console.log(speedMetersSec);
        //console.log(time);
        //console.log(rest);
      
        if (timeHr < 10) {
          console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
        } else {
          console.log(timeHr + ":" + (timeMin + rest) + ":" + timeSec);
        }
      
      }
      
      //TimeToWalk(4000, 0.60, 5);
      //TimeToWalk(2564, 0.70, 5.5);
      //https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
}

time(4000, 0.60, 5);

function solution(steps, lengthInMeters, speedInKPH) {
  let speedInMPS = speedInKPH / 3.6;
  let length = steps * lengthInMeters;
  let breaks = Math.floor(length / 500);
  let time = length / speedInMPS + breaks * 60;
  let hours = Math.floor(time / 3600);
  hours === 0
    ? (hours = "00")
    : hours > 0 && hours < 10
    ? (hours = "0" + hours)
    : hours;
  let minutes = Math.floor(time / 60);
  minutes === 0
    ? (minutes = "00")
    : minutes > 0 && minutes < 10
    ? (minutes = "0" + minutes)
    : minutes;
  let seconds = Math.round(time - minutes * 60);
  seconds === 0
    ? (seconds = "00")
    : seconds > 0 && seconds < 10
    ? (seconds = "0" + seconds)
    : seconds;
  console.log(`${hours}:${minutes}:${seconds}`);
}
