function applyTheme(theme) {
    const root = document.documentElement;
    const icon = document.querySelector("#theme-toggle i");

    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
        icon.className = "fa-solid fa-sun";
    } else {
        root.removeAttribute("data-theme");
        icon.className = "fa-solid fa-moon";
    }

    localStorage.setItem("theme", theme);
}

function getPreferredTheme() {
    const saved = localStorage.getItem("theme");

    if (saved !== null) {
        return saved;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
        return "dark";
    }

    return "light";
}

document.addEventListener("DOMContentLoaded", function () {
    const theme = getPreferredTheme();
    applyTheme(theme);

    document.getElementById("theme-toggle").addEventListener("click", function () {
        const root = document.documentElement;
        const current = root.hasAttribute("data-theme") ? "dark" : "light";
        let next;

        if (current === "dark") {
            next = "light";
        } else {
            next = "dark";
        }

        applyTheme(next);
    });
});
