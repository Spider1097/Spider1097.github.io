async function changeLanguage(lang) {
    try {
        const path = document.getElementById('jsonPath').innerText;
        
        const response = await fetch(path);
        const translations = await response.json();
        const t = translations[lang];

        if (t) {
            for (const [key, id] of Object.entries(elementMap)) {
                document.getElementById(id).innerText = t[key];
            }
        }
        
        console.log("Language changed to:", lang);
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

window.onload = function() {
    changeLanguage('pl');
};