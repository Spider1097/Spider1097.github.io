if (!window.__eduHubIndexContentTranslationMap) {
    window.__eduHubIndexContentTranslationMap = {
        "id_title_1": "id_title_1",
        "id_title_2": "id_title_2",
        "formula_name_circle_1": "formula_name_circle_1",
        "formula_desc_circle_1": "formula_desc_circle_1",
        "formula_example_circle_1": "formula_example_circle_1",
        "formula_name_circle_2": "formula_name_circle_2",
        "formula_desc_circle_2": "formula_desc_circle_2",
        "formula_example_circle_2": "formula_example_circle_2",
        "formula_name_arc_1": "formula_name_arc_1",
        "formula_desc_arc_1": "formula_desc_arc_1",
        "formula_example_arc_1": "formula_example_arc_1",
        "formula_name_sector_1": "formula_name_sector_1",
        "formula_desc_sector_1": "formula_desc_sector_1",
        "formula_example_sector_1": "formula_example_sector_1"
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
