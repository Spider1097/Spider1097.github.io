const elementMap = {
    logo: "logo",
    link1: "link1",
    link2: "link2",
    link3: "link3",
    link4: "link4",
    link5: "link5",
    backButtonText: "backButtonText",
    "title_top": "title_top",

    row1: "row1",
    row1_1: "row1_1",
    row1_2: "row1_2",
    row1_3: "row1_3",
    row1_4: "row1_4",
    row1_5: "row1_5",

    row2: "row2",
    row2_1: "row2_1",
    row2_2: "row2_2",
    row2_3: "row2_3",
    row2_4: "row2_4",

    row3: "row3",
    row3_1: "row3_1",
    row3_2: "row3_2",
    row3_3: "row3_3",
    row3_4: "row3_4",
    row3_5: "row3_5",
    row3_6: "row3_6",
    row3_7: "row3_7",

    row4: "row4",
    row4_1: "row4_1",
    row4_2: "row4_2",
    row4_3: "row4_3",
    row4_4: "row4_4",
    row4_5: "row4_5",

    row5: "row5",
    row5_1: "row5_1",
    row5_2: "row5_2",
    row5_3: "row5_3",
    row5_4: "row5_4",
    row5_5: "row5_5",
    row5_6: "row5_6",

    row6: "row6",
    row6_1: "row6_1",
    row6_2: "row6_2",
    row6_3: "row6_3",
    row6_4: "row6_4",
    row6_5: "row6_5",
    row6_6: "row6_6",

    row7: "row7",
    row7_1: "row7_1",
    row7_2: "row7_2",
    row7_3: "row7_3",
    row7_4: "row7_4",

    row8: "row8",
    row8_1: "row8_1",
    row8_2: "row8_2"

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