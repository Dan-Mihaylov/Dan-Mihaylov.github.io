
document.addEventListener("DOMContentLoaded", function () {
    const openNavButton = document.getElementById("openNavButton");
    const closeNavButton = document.getElementById("closeNavButton");
    const navWindow = document.getElementById("navWindow");
    const contentWrapper = document.querySelector(".content-wrapper");

    openNavButton.addEventListener("click", function () {
        navWindow.style.top = "0";
        openNavButton.style.opacity = 0;
        contentWrapper.classList.add("blur");
        
    });

    closeNavButton.addEventListener("click", function () {
        openNavButton.style.opacity = 1;
        contentWrapper.classList.remove("blur");
        navWindow.style.top = "-100%"
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const openNavButton = document.getElementById("openNavButton");
//     const closeNavButton = document.getElementById("closeNavButton");
//     const navWindow = document.getElementById("navWindow");
//     const mainWrapper = document.querySelector(".main-wrapper");

//     openNavButton.addEventListener("click", function () {
//         // Add a CSS class to apply the animation and blur effect
//         navWindow.classList.add("open");
//         mainWrapper.classList.add("blur");
//     });

//     closeNavButton.addEventListener("click", function () {
//         // Remove the CSS class to reverse the animation and remove blur
//         navWindow.classList.remove("open");
//         mainWrapper.classList.remove("blur");
//     });
// });