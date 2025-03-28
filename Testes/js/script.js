document.querySelector(".themeButton").addEventListener("click", function () {
    let button = this;
    let currentTheme = button.getAttribute("data-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";
    button.setAttribute("data-theme", newTheme);
});