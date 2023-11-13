
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
        navWindow.style.top = "-100%";
    });
});


document.addEventListener('DOMContentLoaded', function () {


    let clickableDescriptions = document.querySelectorAll('.clickable-description');

    clickableDescriptions.forEach(function (description) {
        description.addEventListener('click', function () {
            // Finding the parent element witht the class description-box
            let parentDescriptionBox = this.closest('.description-box');

            // Finding the <p> element inside the parent box
            let content = parentDescriptionBox.querySelector('p');
            let expand = parentDescriptionBox.querySelector('h4');

            if (content.style.display === 'none' || window.getComputedStyle(content).display === 'none') {
                content.style.display = 'block';
                expand.style.display = 'none';
            } else {
                content.style.display = 'none';
                expand.style.display = 'block';
            }
        });
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