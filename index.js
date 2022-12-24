const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function clock(){
   let date = new Date();
   let h = date.getHours();
   let m = date.getMinutes();
   let s = date.getSeconds();
   let amPM = "AM";

   if(h > 12){
    h -= 12;
    amPM = "PM";
   }

   h = h < 10? "0"+h: h;
   m = m < 10? "0"+m: m;
   s = s < 10? "0"+s: s;

   hour.innerHTML = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;
   ampm.innerHTML = amPM;

   setTimeout(() => {
        clock();
   }, 1000);

}

clock();



