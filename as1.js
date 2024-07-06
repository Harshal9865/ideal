// script.js

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const isOpen = sidebar.style.left === "0px";

    if (isOpen) {
        sidebar.style.left = "-250px";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.left = "0";
        content.style.marginLeft = "250px";
    }
}
