(function() {
    if (window.__eduHubHeaderInjected) return;
    window.__eduHubHeaderInjected = true;

    function loadHeader() {
        fetch('/page_structure/Global_settings/html/header.html')
            .then(response => response.text())
            .then(data => {
                const headerContainer = document.querySelector('.header');
                if (headerContainer) {
                    headerContainer.innerHTML = data;
                    document.dispatchEvent(new Event('language:refresh'));
                }
            })
            .catch(err => console.error("Error loading header:", err));
    }

    document.addEventListener("DOMContentLoaded", loadHeader);
    window.addEventListener("pageshow", loadHeader);
})();