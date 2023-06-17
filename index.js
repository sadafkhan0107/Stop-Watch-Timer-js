const currentTime = document.querySelector(".time")
const buttonParent = document.querySelector(".btn-container")

let sec = 0;
let min = 0;
let hrs = 0;
let timerId;

function displayTime(hrs,min,sec){
    currentTime.innerText = `${hrs < 10 ? `0${hrs}` : hrs} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`
}
function handleButtonClick(e){
    const button = e.target.name
    if(button === "start"){
        timerId = setInterval(() =>{
            sec++;
            if(sec > 58){
                sec = 0;
                min++;
                if(min > 58){
                    min = 0;
                    hrs++;
                }
            }
            displayTime(hrs, min, sec)
        }, 1000)
    }
    if(button === "stop")
    {
        clearInterval(timerId);
    }
    if(button === "reset")
    {
        clearInterval(timerId);
        sec = min = hrs = 0;
        displayTime(hrs, min, sec)
    }
}

buttonParent.addEventListener("click", handleButtonClick)