
// To do light mode toggle

function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.innerHTML = '-';
    } else {
        content.classList.add('hidden');
        icon.innerHTML = '+';
    }
}