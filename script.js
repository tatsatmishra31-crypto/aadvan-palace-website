const text = "The Aadvan Palace";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing-title").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 180);

    }

}

window.onload = typeEffect;
