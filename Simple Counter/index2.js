let count=0;

function updateCount()
{
    document.getElementById("count").textContent=count;
}

document.getElementById("b1").onclick=function(){
    count+=1;
    updateCount();
}

document.getElementById("b2").onclick=function(){
    count=0;
    updateCount();
}
document.getElementById("b3").onclick=function(){
    count--;
    updateCount();
}