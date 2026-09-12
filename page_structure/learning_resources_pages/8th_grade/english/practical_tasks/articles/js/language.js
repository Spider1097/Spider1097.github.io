if (!window.__eduHubIndexContentTranslationMap) {
    window.__eduHubIndexContentTranslationMap = {

    "source-title": "source-title",
    "source-desc": "source-desc",

    "ex1-task-title": "ex1-task-title",
    "ex1-toggle-btn": "ex1-toggle-btn",

    "ex2-task-title": "ex2-task-title",
    "ex2-toggle-btn": "ex2-toggle-btn",

    "ex3-task-title": "ex3-task-title",
    "ex3-toggle-btn": "ex3-toggle-btn",

    "ex4-task-title": "ex4-task-title",
    "ex4-adjectives-label": "ex4-adjectives-label",
    "ex4-nouns-label": "ex4-nouns-label",
    "ex4-example-title": "ex4-example-title",
    "ex4-ex-text": "ex4-ex-text",
    "ex4-toggle-btn": "ex4-toggle-btn",

    "ex5-task-title": "ex5-task-title",
    "ex5-words-label": "ex5-words-label",
    "ex5-toggle-btn": "ex5-toggle-btn",

    "ex6-task-title": "ex6-task-title",
    "ex6-toggle-btn": "ex6-toggle-btn",

    "ex7-task-title": "ex7-task-title",
    "ex7-ex-label": "ex7-ex-label",
    "ex7-toggle-btn": "ex7-toggle-btn",

    "ex8-task-title": "ex8-task-title",
    "ex8-ex-label": "ex8-ex-label",
    "ex8-toggle-btn": "ex8-toggle-btn",

    "ex9-task-title": "ex9-task-title",
    "ex9-toggle-btn": "ex9-toggle-btn",

    "ex10-task-title": "ex10-task-title",
    "ex10-toggle-btn": "ex10-toggle-btn",

    "ex11-task-title": "ex11-task-title",
    "ex11-toggle-btn": "ex11-toggle-btn"

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
