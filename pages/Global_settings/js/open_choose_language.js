function toggleLang() {
    const dropdown = document.getElementById("langDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.lang-icon')) {
        document.getElementById("langDropdown").style.display = "none";
    }
}