let sec = document.getElementById('seconds')
let min = document.getElementById('minute')
let hour = document.getElementById('hour')

let second = 1000
let time = new Date();

let s = time.getSeconds()*6
let h = time.getHours()*30
let m = time.getMinutes()*6
sec.setAttributeNS(null,'transform','rotate('+ s +')')
min.setAttributeNS(null,'transform','rotate('+ m +')')
hour.setAttributeNS(null,'transform','rotate('+ h +')')

setInterval(()=>{
    time = new Date()
    s = time.getSeconds()*6
    sec.setAttributeNS(null,'transform','rotate('+ s +')')
},second)

setInterval(()=>{
    time = new Date()
    m = time.getMinutes()*6
    min.setAttributeNS(null,'transform','rotate('+ m +')')
},second)

setInterval(()=>{
    time = new Date()
    h = time.getHours()*30
    hour.setAttributeNS(null,'transform','rotate('+ h +')')
},second)