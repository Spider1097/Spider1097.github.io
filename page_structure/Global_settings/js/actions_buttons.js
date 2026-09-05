(function() {
    if (window.__eduHubActionsButtonsInitialized) return;
    window.__eduHubActionsButtonsInitialized = true;

    document.addEventListener("DOMContentLoaded", () => {
        const langMenu = document.getElementById("langMenu");
        const dropdownContent = document.getElementById("dropdownContent");
        const dropdownInner = dropdownContent ? dropdownContent.querySelector(".dropdown-content-inner") : null;

        if (langMenu && dropdownContent) {
            langMenu.addEventListener("click", (event) => {
                event.stopPropagation();
                dropdownContent.classList.add("show");
            });

            dropdownContent.addEventListener("click", () => {
                dropdownContent.classList.remove("show");
            });

            if (dropdownInner) {
                dropdownInner.addEventListener("click", (event) => {
                    event.stopPropagation();
                });
            }
        }

        document.addEventListener("click", (event) => {
            const button = event.target.closest('#mobileMenuBtn');
            if (button) {
                event.stopPropagation();
                const mobileMenuContent = document.getElementById("mobileMenuContent");
                if (mobileMenuContent) {
                    mobileMenuContent.classList.toggle("show");
                }
                return;
            }

            const mobileMenuContent = document.getElementById("mobileMenuContent");
            if (!mobileMenuContent) return;

            if (!event.target.closest('#mobileMenuContent')) {
                mobileMenuContent.classList.remove("show");
            }
        });
    });
})();

function closeMobileMenu() {
    const mobileMenuContent = document.getElementById("mobileMenuContent");
    if (mobileMenuContent) {
        mobileMenuContent.classList.remove("show");
    }
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '/index.html';
    }
}