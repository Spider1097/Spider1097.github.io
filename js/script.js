function navigateTo(subject) {
    // W przyszłości każda gałąź będzie miała swój plik .html
    window.location.href = "/html/matematyka.html";
}

// Czekamy, aż cała strona się załaduje
document.addEventListener('DOMContentLoaded', () => {
    
    // Wybieramy wszystkie elementy z klasą "card"
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Dodajemy reakcję na kliknięcie do każdej karty
        card.addEventListener('click', () => {
            // Pobieramy wartość z atrybutu data-link
            const destination = card.getAttribute('data-link');
            
            if (destination) {
                // Przechodzimy do strony (zakładając, że są w folderze html)
                window.location.href = "/html/informatyka.html";
            }
        });
    });

});