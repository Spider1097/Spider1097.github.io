if (!window.__eduHubIndexContentTranslationMap) {
    window.__eduHubIndexContentTranslationMap = {
        "card1-title": "card1-title", "card1-desc": "card1-desc",
        "card2-title": "card2-title", "card2-desc": "card2-desc",
        "card3-title": "card3-title", "card3-desc": "card3-desc",
        "card4-title": "card4-title", "card4-desc": "card4-desc",
        "card5-title": "card5-title", "card5-desc": "card5-desc",
        "card6-title": "card6-title", "card6-desc": "card6-desc",
        "card7-title": "card7-title", "card7-desc": "card7-desc",
        "card8-title": "card8-title", "card8-desc": "card8-desc",
        "card9-title": "card9-title", "card9-desc": "card9-desc",
        "card10-title": "card10-title", "card10-desc": "card10-desc",
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