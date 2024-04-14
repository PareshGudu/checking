

let navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0"
}
function hideMenu() {
    navLinks.style.right = "-200px"
}


let typed = new Typed(".auto-type", {
    strings: ["Frontend Developer", "Web/Ui Developer", "Web Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

let number = document.getElementById("number")
let counter = 0
setInterval(() => {
    if (counter == 65) {
        clearInterval()
    } else {
        counter += 1
        number.innerHTML = counter + "%"
    }
}, 30);

let number1 = document.getElementById("number1")
let counter1 = 0
setInterval(() => {
    if (counter1 == 75) {
        clearInterval()
    } else {
        counter1 += 1
        number1.innerHTML = counter1 + "%"
    }
}, 30);


AOS.init();