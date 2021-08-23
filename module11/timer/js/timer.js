
 let timer = new Date('Sep 1, 2021 ');
 
 setInterval(function() {

     let now = new Date().getTime();

     let time = (timer - now);

     const days = Math.floor(time / (1000 * 60 * 60 * 24));

     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     
     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
     
     const secs = Math.floor((time % (1000 * 60)) / 1000);

     document.getElementById("timer-1").innerHTML = days + "Days " + hours + "Hours "+ mins + "Minutes " + secs + "Seconds ";


 }, 1000);
