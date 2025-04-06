document.addEventListener("DOMContentLoaded", function() {
  function updateCountdown(targetDate) {
    var now = new Date().getTime();
    var distance = targetDate - now;
    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "Etapa začala!";
      return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  // Countdown target: 05.04.2025 09:00:00 (format: yyyy-mm-ddThh:mm:ss)
  var targetDate = new Date("2025-04-05T09:00:00").getTime();

  // Update immediately and then every second
  updateCountdown(targetDate);
  setInterval(function() {
    updateCountdown(targetDate);
  }, 1000);
});
