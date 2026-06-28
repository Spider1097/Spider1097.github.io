const elementMap = {
    logo: "logo",
    link1: "link1",
    link2: "link2",
    link3: "link3",
    link4: "link4",
    link5: "link5",
    backButtonText: "backButtonText"
};

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.math-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});