
var hour=0;
var min=0;
var sec=0;
var msec=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var hourHeading=document.getElementById("hour");

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++;
        msec=0;
        secHeading.innerHTML=sec;
      
    }
    else if(sec>=60){
        min++;
        sec=0;
        minHeading.innerHTML=min;
    }
    else if(min>=60){
        hour++;
        min=0;
        hourHeading.innerHTML=hour;
        
    }
    else if(hour>=24){
        reset();  //stop watch limit is 24 hours after this it will stop
    }
   
}
function start(){
    interval=setInterval(timer,10);
}
function pause(){
    clearInterval(interval)

    var start=document.getElementById("start");  //start button will undisabled after click pause
    start.disabled=false;
}
function reset(){
    hour=0;
    min=0;
    sec=0;
    msec=0;
    hourHeading.innerHTML=hour;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    pause();

    var start=document.getElementById("start");  //start button will undisabled after click reset
    start.disabled=false;
}




