if (!window.__eduHubIndexContentTranslationMap) {
    window.__eduHubIndexContentTranslationMap = {
        "id_title_1" : "id_title_1",
        "card1-title" : "card1-title",
        "card1-desc" : "card1-desc"
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
