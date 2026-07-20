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
    exampleText_2_3: "exampleText_2_3",

    section_title_3: "section_title_3",
    explanation_text_3_1: "explanation_text_3_1",
    explanation_text_3_2: "explanation_text_3_2",
    explanation_text_3_3: "explanation_text_3_3",
    rulesHeader_3_1: "rulesHeader_3_1",
    ruleText_3_1: "ruleText_3_1",
    ruleText_3_2: "ruleText_3_2",
    ruleText_3_3: "ruleText_3_3",
    examplesHeader_3_1: "examplesHeader_3_1",
    exampleText_3_1: "exampleText_3_1",
    exampleText_3_2: "exampleText_3_2",
    exampleText_3_3: "exampleText_3_3",
    exampleText_3_4: "exampleText_3_4",

    section_title_4: "section_title_4",
    explanation_text_4_1: "explanation_text_4_1",
    explanation_text_4_2: "explanation_text_4_2",
    explanation_text_4_3: "explanation_text_4_3",
    rulesHeader_4_1: "rulesHeader_4_1",
    ruleText_4_1: "ruleText_4_1",
    ruleText_4_2: "ruleText_4_2",
    ruleText_4_3: "ruleText_4_3",
    ruleText_4_4: "ruleText_4_4",
    examplesHeader_4_1: "examplesHeader_4_1",
    exampleText_4_1: "exampleText_4_1",
    exampleText_4_2: "exampleText_4_2",
    exampleText_4_3: "exampleText_4_3",
    exampleText_4_4: "exampleText_4_4",

    section_title_5: "section_title_5",
    explanation_text_5_1: "explanation_text_5_1",
    explanation_text_5_2: "explanation_text_5_2",
    explanation_text_5_3: "explanation_text_5_3",

    formulasHeader_5_1: "formulasHeader_5_1",
    formulasHeader_5_2: "formulasHeader_5_2",
    formulasHeader_5_3: "formulasHeader_5_3",

    rulesHeader_5_1: "rulesHeader_5_1",
    ruleText_5_1: "ruleText_5_1",
    ruleText_5_2: "ruleText_5_2",
    ruleText_5_3: "ruleText_5_3",
    ruleText_5_4: "ruleText_5_4",
    examplesHeader_5_1: "examplesHeader_5_1",
    exampleText_5_1: "exampleText_5_1",
    exampleText_5_2: "exampleText_5_2",
    exampleText_5_3: "exampleText_5_3",
    exampleText_5_4: "exampleText_5_4",

    contactTitle: "contactTitle"

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
