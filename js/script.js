window.onload = () => {
    /* dinamic menu js */
    const menuIcon = document.getElementById("menu-icon");

    menuIcon.addEventListener("click", (e) => {
        document.getElementById("navbar").classList.toggle("show")
    });
}