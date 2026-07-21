const text = "The Aadvan Palace";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing-title").textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 250);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeEffect, 800);

});
