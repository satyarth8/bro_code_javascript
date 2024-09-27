let age;

document.getElementById("submit").onclick = function() {
    age = Number(document.getElementById("input").value);

    if(age > 20) {
        document.getElementById("agecheck").textContent = "You are verified.";
        alert("Garam Hai");
    } else {
        document.getElementById("agecheck").textContent = "You are not verified. Come back later.";
        alert("Bache kal ana");
    }
}
