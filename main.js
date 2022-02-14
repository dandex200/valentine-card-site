var penis = document.querySelector('.penis');
var images = ['pic1.jpg', 'pic2.jpg'];
var i = 0;

function checkPswd() {
    var confirmPassword = "valentine";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
        window.location = 'card.html';
    }
    else {
        alert("Incorrect Password.");
    }
}

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}
function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}
function setImg() {
    return penis.setAttribute('src', "images/" + images[i]);
}
console.log("yo mom");