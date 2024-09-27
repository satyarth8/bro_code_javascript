// add all the element in const

const mySubmit = document.getElementById("mySubmit");
const chk1=document.getElementById("chk1");
const chk2=document.getElementById("chk2");
const chk3=document.getElementById("chk3");
const chk4=document.getElementById("chk4");
const chk5=document.getElementById("chk5");
const chk6=document.getElementById("chk6");

const lb1=document.getElementById("lb1");
const lb2=document.getElementById("lb2");
const lb3=document.getElementById("lb3");
const lb4=document.getElementById("lb4");
const lb5=document.getElementById("lb5");
const lb6=document.getElementById("lb6");


mySubmit.onclick=function()
{
   strikeThrough(chk1,lb1);
   strikeThrough(chk2,lb2);
   strikeThrough(chk3,lb3);
   strikeThrough(chk4,lb4);
   strikeThrough(chk5,lb5);
}

function strikeThrough(checkbox, label) {
    if (checkbox.checked) {
        label.innerHTML = `<span style="text-decoration: line-through;">${label.textContent}</span>`;
    } else {
        label.textContent = label.textContent;
    }
}
