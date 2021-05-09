const footerLinks = document.querySelectorAll("#upper-footer a");


for (let i = 0; i< footerLinks.length; i++) {
    footerLinks[i].addEventListener ("mouseover", (event) => {
        event.target.style.color = "white";
    })
}

for (let i = 0; i< footerLinks.length; i++) {
    footerLinks[i].addEventListener ("mouseout", (event) => {
        event.target.style.color = "rgb(187, 179, 179)";
    })
}