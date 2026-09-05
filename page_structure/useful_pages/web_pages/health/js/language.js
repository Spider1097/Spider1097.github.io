if (!window.__eduHubIndexContentTranslationMap) {
    window.__eduHubIndexContentTranslationMap = {
        "card-desc-1": "card-desc-1",
        "card-desc-2": "card-desc-2",
        "card-desc-3": "card-desc-3",
        "card-desc-4": "card-desc-4",
        "card-desc-5": "card-desc-5",
        "card-desc-6": "card-desc-6",
        "card-desc-7": "card-desc-7",
        "card-desc-8": "card-desc-8",
        "card-desc-9": "card-desc-9",
        "card-desc-10": "card-desc-10"
    };
}
var contentTranslationMap = window.__eduHubIndexContentTranslationMap;

if (typeof window.updateContentLang !== 'function') {
    window.updateContentLang = function(lang) {
        selectLanguage(lang, contentTranslationMap, 'translations-path-page');
    };
}

function applySavedIndexLanguage() {
    setTimeout(() => {
        const savedLang = localStorage.getItem('selectedLang') || 'pl';
        selectLanguage(savedLang, contentTranslationMap, 'translations-path-page');
    }, 50);
}

if (!window.__eduHubIndexLangHandlersInitialized) {
    window.__eduHubIndexLangHandlersInitialized = true;

    window.addEventListener('load', applySavedIndexLanguage);
    window.addEventListener('pageshow', applySavedIndexLanguage);
}