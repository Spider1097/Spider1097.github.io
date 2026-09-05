async function changeLanguage(lang, translationMap, containerId) {
    lang = lang || 'pl';

    try {
        const pathEl = document.getElementById(containerId);
        if (!pathEl) return;

        const response = await fetch(pathEl.innerText.trim());
        const data = await response.json();
        const t = data[lang];

        if (!t) return;

        for (const [id, key] of Object.entries(translationMap)) {
            const elements = document.querySelectorAll(`#${id}`);

            if (elements.length > 0 && t[key] !== undefined) {
                elements.forEach(el => {
                    if (id.startsWith('i-')) {
                        el.innerHTML = t[key];
                    } else {
                        el.textContent = t[key];
                    }
                });
            }
        }
    } catch (e) {
        console.error("Error loading language:", e);
    }
}

function selectLanguage(lang, translationMap, containerId) {
    localStorage.setItem('selectedLang', lang);
    changeLanguage(lang, translationMap, containerId);
}

if (!window.__eduHubHeaderTranslationMap) {
    window.__eduHubHeaderTranslationMap = {
        'link1': 'link1',
        'link2': 'link2',
        'link3': 'link3',
        'link4': 'link4',
        'link5': 'link5',
        'mobile-link1': 'mobile-link1',
        'mobile-link2': 'mobile-link2',
        'mobile-link3': 'mobile-link3',
        'mobile-link4': 'mobile-link4',
        'mobile-link5': 'mobile-link5',
        'backButton_header': 'backButton_header',
        'closeButton_header': 'closeButton_header'
    };
}
var myTranslationMap = window.__eduHubHeaderTranslationMap;

if (typeof window.updateLang !== 'function') {
    window.updateLang = function(lang) {
        selectLanguage(lang, myTranslationMap, 'translations-path-header');
        if (typeof window.updateContentLang === 'function') {
            window.updateContentLang(lang);
        }
    };
}

function applySavedHeaderLanguage() {
    setTimeout(() => {
        const savedLang = localStorage.getItem('selectedLang') || 'pl';
        selectLanguage(savedLang, myTranslationMap, 'translations-path-header');
        if (typeof window.updateContentLang === 'function') {
            window.updateContentLang(savedLang);
        }
    }, 50);
}

if (!window.__eduHubLanguageHandlersInitialized) {
    window.__eduHubLanguageHandlersInitialized = true;

    window.addEventListener('load', applySavedHeaderLanguage);
    window.addEventListener('pageshow', applySavedHeaderLanguage);
}

function toggleLangModal() {
    const modal = document.getElementById('dropdownContent');
    if (!modal) return;

    modal.classList.toggle('show');
}

function closeLangModal() {
    const modal = document.getElementById('dropdownContent');
    if (modal) {
        modal.classList.remove('show');
    }
}

function selectLanguageAndClose(lang) {
    if (typeof updateLang === 'function') {
        updateLang(lang);
    }
    closeLangModal();
}