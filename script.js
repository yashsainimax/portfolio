function showmessage(){
    alert("welcome yash!thanks for visiting my website.");
}

let text = "future web developer";
let i = 0;

function typingeffect() {
    if (i < text.length) {
        document.getElementByld("typing").innerHTML +=
    text.charAt(i);
i++;
setTimeout(typingeffect,100)
}
}
typingeffect();

function portfolioproject(){
    alert("this is my first portfoloio website mode using html,css and javascript.");
}

function calculatorproject(){
    alert("calculator project is coming soon.");
}

function validateForm() {

    let name = document.querySelector('input[type="text"]').value;

    let email = document.querySelector('input[type="email"]').value;

    if (name == "" || email == "") {
        alert("Please fill all required fields!");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}

function darkMode() {
    document.body.classList.toggle("dark");
}