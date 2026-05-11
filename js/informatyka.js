// Czekamy na załadowanie strony
document.addEventListener('DOMContentLoaded', () => {
    console.log("Strona z kursem Pythona gotowa!");

    // Przykład: Możemy dodać efekt podświetlenia karty po kliknięciu
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log("Wybrałeś temat: " + card.querySelector('h2').innerText);
        });
    });
});