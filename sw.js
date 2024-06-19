var min=document.getElementById("min")
var sec=document.getElementById("sec")
var milliSec=document.getElementById("ms")
var startTime=0;
var elapsedTime=0;
var isRunning=false;
var timer=null;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning=true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime
        isRunning=false
    }
}

function reset(){
    clearInterval(timer);
    elapsedTime=0;
    isRunning=false;
    startTime=0;
    min.innerHTML="00"
    sec.innerHTML="00"
    milliSec.innerHTML="00"
}

function update(){
    const curTime= Date.now();
    elapsedTime = curTime - startTime;
    let minutes= Math.floor(elapsedTime/(1000 * 60)%60);
    let seconds=Math.floor(elapsedTime/1000 %60);
    let milli=Math.floor(elapsedTime%1000/10);

    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milli=String(milli).padStart(2,"0");

    min.innerHTML=minutes
    sec.innerHTML=seconds
    milliSec.innerHTML=milli

}
