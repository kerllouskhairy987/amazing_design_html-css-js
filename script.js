
// ------- Start Header Scriot -----------
let mode = document.querySelector(".mode");
let modeInp = document.querySelector("#mode");
let iconMode = document.querySelector(".mode label span i");

mode.addEventListener("click", function () {
    if (modeInp.checked) {
        window.localStorage.setItem("modeColor", "dark_mode")
        document.body.classList.add("dark_mode");
        iconMode.classList.replace("fa-lightbulb", "fa-moon")
    } else {
        document.body.classList.remove("dark_mode");
        window.localStorage.removeItem("modeColor")
        iconMode.classList.replace("fa-moon", "fa-lightbulb")
    }

})

if (window.localStorage.getItem("modeColor")) {
    iconMode.classList.replace("fa-lightbulb", "fa-moon")
    document.body.classList.add("dark_mode");
}

let menuDiv = document.querySelector(".menu-div");
let menuChecked = document.querySelector("#menu_checked");
let iconMenu = document.querySelector("#menu i");

document.querySelector("#menu").addEventListener("click", function () {
    if (menuChecked.checked) {
        menuDiv.classList.add("active")
        iconMenu.classList.replace("fa-plus", "fa-minus")
    } else {
        menuDiv.classList.remove("active")
        iconMenu.classList.replace("fa-minus", "fa-plus")
    }
})

// Sub Nav
let subNav = document.querySelector(".sub-nav");
let toTop = document.querySelector("#toTop");

let lastScrollY = window.scrollY;
window.onscroll = function () {
    if (window.scrollY > lastScrollY) {
        // Scroll Down
        subNav.classList.add("hide-sun-nav")
    } else {
        // Scroll Up
        subNav.classList.remove("hide-sun-nav")
    }
    lastScrollY = window.scrollY;
    // BackGround For Sub Nav
    if(window.scrollY > 150) {
        subNav.style.backgroundColor = "rgba(255, 255, 255, 0.567)";
    } else {
        subNav.style.backgroundColor = "var(--container-color)";
    }
    // Scroll To Top
    if (window.scrollY > 300) {
        toTop.style.transform = "scale(1)";
    } else {
        toTop.style.transform = "scale(0)";
    }
}

// Scroll To Top Function
toTop.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

// ------- End Header Scriot -----------
window.onload = function () {
    document.body.classList.add("body-loading")
}