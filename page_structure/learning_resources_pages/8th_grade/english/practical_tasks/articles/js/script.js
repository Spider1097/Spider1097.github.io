function toggleInlineAnswers(taskId) {
    const box = document.getElementById(taskId + '-box');
    const slots = box.querySelectorAll('.edu-ans-slot');
    const btn = document.getElementById(taskId + '-toggle-btn');
    
    const isRevealed = btn.getAttribute('data-revealed') === 'true';
    
    slots.forEach(slot => {
        if (!isRevealed) {
            slot.textContent = slot.getAttribute('data-ans');
            slot.classList.add('edu-ex-hl');
        } else {
            slot.textContent = '...';
            slot.classList.remove('edu-ex-hl');
        }
    });
    
    if (!isRevealed) {
        btn.setAttribute('data-revealed', 'true');
        btn.textContent = "🙈";
    } else {
        btn.setAttribute('data-revealed', 'false');
        btn.textContent = "👁️";
    }
}

