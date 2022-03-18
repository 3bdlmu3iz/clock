let sec = document.getElementById('seconds')
let s = 0
let second = 1000
setInterval(()=>{
    s+=6/100;
    sec.setAttributeNS(null,'transform','rotate('+ s +')')
},second/100)

let min = document.getElementById('minute')
let m = 0
setInterval(()=>{
    m+=0.1;
    min.setAttributeNS(null,'transform','rotate('+ m +')')
},second)

let hour = document.getElementById('hour')
let h = 0
setInterval(()=>{
    h+=0.5;
    hour.setAttributeNS(null,'transform','rotate('+ h +')')
},second*60)