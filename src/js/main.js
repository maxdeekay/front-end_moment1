"use strict";

const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");

openBtn.onclick = () => toggleMenu();
closeBtn.onclick = () => toggleMenu();

function toggleMenu() {
    const navMenuEl = document.getElementById("nav-menu");

    let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}