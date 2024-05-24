// Get the button
let mybutton = document.getElementById("toTheTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document with a delay
function topFunction() {
    // Scroll to the top after a delay of 500 milliseconds (0.5 seconds) with smooth scrolling
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}