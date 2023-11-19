function startTimer(duration) {
    let timer = duration;
    setInterval(function () {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;
  
      document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
      document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes ;
      document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds ;
  
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  window.onload = function () {
    const twoHours = 2 * 60 * 60; // 2 hours in seconds
    startTimer(twoHours);
  };
  
  