let second = document.getElementById("second");
let milli = document.getElementById("millisecond");
let intervalId;

let m = 00;
let s = 00;

const start = document.getElementById("start");
start.addEventListener("click", function(){
    intervalId = setInterval(time, 10);
})

const stop = document.getElementById("stop");
stop.addEventListener("click", function(){
    clearInterval(intervalId);
})

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    clearInterval(intervalId);
    m = 0;
    s = 0;
    second.innerHTML = "0" + s;
    milli.innerHTML = "0" + m;
})


function time(){
    

    m++;
    if(m < 10)
    {
        milli.innerHTML = "0" + m;
    }

    if(m >= 10)
    {
        milli.innerHTML = m;
    }

    if(m > 99)
    {
        s++;
        second.innerHTML = "0" + s;
        m = 0;
        milli.innerHTML = "0" + m;
    }

    if(s >= 10)
    {
        second.innerHTML = s;
    }


}
