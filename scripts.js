
document.addEventListener("DOMContentLoaded", function () {
    const openNavButton = document.getElementById("openNavButton");
    const closeNavButton = document.getElementById("closeNavButton");
    const navWindow = document.getElementById("navWindow");

    openNavButton.addEventListener("click", function () {
        navWindow.style.display = "block";
        navWindow.style.opacity = 0.92;
        openNavButton.style.opacity = 0;
    });

    closeNavButton.addEventListener("click", function () {
        navWindow.style.display = "none";
        openNavButton.style.opacity = 1;
    });
});