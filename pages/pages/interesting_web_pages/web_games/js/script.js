const elementMap = {
    logo: "logo",
    link1: "link1",
    link2: "link2",
    link3: "link3",
    link4: "link4",
    link5: "link5",
    backButtonText: "backButtonText",
    block1_title: "block1_title",
    block1_text:  "block1_text",
    block2_title: "block2_title",
    block2_text:  "block2_text",
    block3_title: "block3_title",
    block3_text:  "block3_text",
    block4_title: "block4_title",
    block4_text:  "block4_text",
    block5_title: "block5_title",
    block5_text:  "block5_text"
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