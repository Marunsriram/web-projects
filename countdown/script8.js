const countdown = () => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeDiff = newYearDate - now;
  
    if (timeDiff <= 0) {
      document.querySelector(".timer").innerHTML = "<h2>Happy New Year!</h2>";
      clearInterval(interval);
      return;
    }
  
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const millisec = Math.floor(timeDiff / 1000);
  
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
   
  };
  
  const interval = setInterval(countdown, 1000);
  
  