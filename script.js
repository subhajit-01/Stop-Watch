let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");

let minuteCount = 0,
    hourCount = 0;
let secondCount = 0;

let result;
function clock(){
    if (result) return;
    result = setInterval(() => {
        secondCount++;
        // second.innerText = secondCount;
    
        if (secondCount === 60) {
            secondCount = 0;
            second.innerText = secondCount;
            minuteCount++;
            // minute.innerText = minuteCount;
    
            if (minuteCount === 60) {
                minuteCount = 0;
                minute.innerText = minuteCount;
                hourCount++;
                // hour.innerText = hourCount;
            }
        }
        second.innerText = secondCount.toString().padStart(2, '0'); 
        minute.innerText = minuteCount.toString().padStart(2, '0');
        hour.innerText = hourCount.toString().padStart(2, '0');
    },1000);
} 

function stop(){
    clearInterval(result);
    result = null;
}
function reset(){
    stop();
    minuteCount = 0;
    minute.innerText = "00";
    hourCount = 0;
    hour.innerText = "00";
   secondCount = 0;
   second.innerText = "00";
   
}
