let val1 = 0, val2 = 0, val3 = 0;
const min = 1, max = 9;

document.getElementById("roll").onclick=function(){
    document.getElementById("value1").textContent= Math.trunc((Math.random()* (max-min))+min);
    document.getElementById("value2").textContent= Math.trunc((Math.random()* (max-min))+min);
    document.getElementById("value3").textContent= Math.trunc((Math.random()* (max-min))+min);
}
document.getElementById