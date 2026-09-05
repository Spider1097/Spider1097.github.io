(function() {
    if (window.__eduHubHideMenuInjected) return;
    window.__eduHubHideMenuInjected = true;

    function loadHideMenu() {
        fetch('/page_structure/Global_settings/html/hide_menu.html')
            .then(response => response.text())
            .then(data => {
                const div = document.createElement('div');
                div.innerHTML = data;
                document.body.appendChild(div);
            })
            .catch(err => console.error("Error loading mobile menu:", err));
    }

    document.addEventListener("DOMContentLoaded", loadHideMenu);
    window.addEventListener("pageshow", loadHideMenu);
})();