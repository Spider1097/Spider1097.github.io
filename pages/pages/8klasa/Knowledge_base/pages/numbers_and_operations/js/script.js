const elementMap = {
    logo: "logo",
    link1: "link1",
    link2: "link2",
    link3: "link3",
    link4: "link4",
    link5: "link5",
    backButtonText: "backButtonText",

    section_title_1: "section_title_1",
    explanation_text_1_1: "explanation_text_1_1",
    explanation_text_1_2: "explanation_text_1_2",
    explanation_text_1_3: "explanation_text_1_3",
    rulesHeader_1: "rulesHeader_1",
    ruleText_1_1: "ruleText_1_1",
    ruleText_1_2: "ruleText_1_2",
    ruleText_1_3: "ruleText_1_3",
    examplesHeader_1: "examplesHeader_1",
    exampleText_1_1: "exampleText_1_1",
    exampleText_1_2: "exampleText_1_2",

    section_title_2: "section_title_2",
    explanation_text_2_1: "explanation_text_2_1",
    explanation_text_2_2: "explanation_text_2_2",
    explanation_text_2_3: "explanation_text_2_3",
    rulesHeader_2_1: "rulesHeader_2_1",
    ruleText_2_1: "ruleText_2_1",
    ruleText_2_2: "ruleText_2_2",
    ruleText_2_3: "ruleText_2_3",
    examplesHeader_2_1: "examplesHeader_2_1",
    exampleText_2_1: "exampleText_2_1",
    exampleText_2_2: "exampleText_2_2",
    exampleText_2_3: "exampleText_2_3"
};

function filterCards() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        const title = block.querySelector('h3').innerText.toLowerCase();
        
        if (title.includes(filter)) {
            block.style.display = "";
        } else {
            block.style.display = "none";
        }
    });
}