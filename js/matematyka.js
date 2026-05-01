function openTab(evt, tabName) {
    let i, tabContent, tabBtns;

    // Ukryj wszystkie treści zakładek
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // Usuń klasę active ze wszystkich przycisków
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Pokaż obecną zakładkę i dodaj klasę active do przycisku
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}