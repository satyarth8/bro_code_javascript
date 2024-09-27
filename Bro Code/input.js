// two ways
// 1. easy = window prompt
// 2. professional = html textbox

let username;

username = window.prompt("What is your username");

console.log(username);


//pro way


document.getElementById("mysubmit").onclick=function(){
    username= document.getElementById("myText").value;
    document.getElementById("23").textContent=`Hello ,${username}`;
}
