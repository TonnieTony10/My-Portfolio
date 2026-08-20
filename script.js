const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! Your message has been received."
    );

    contactForm.reset();

});


const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    "© " + year + " Anthony Athanas Masawe. All Rights Reserved.";
