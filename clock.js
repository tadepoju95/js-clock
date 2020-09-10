setInterval(myTime, 1000);
function myTime() {
  let clockTime = new Date();
  document.getElementById('time').innerHTML = clockTime.toLocaleTimeString();
}
