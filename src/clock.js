const clock = document.querySelector("#clock");

function clockNow() {
  clock.innerText = Date();
}

clockNow();
setInterval(clockNow, 1000);
