const panels = document.querySelectorAll('.panel'); // Select all elements with class 'panel'

panels.forEach(panel =>{ // Iterate through the list 'panels'
    panel.addEventListener('click', () => {
        removeActiveClass(); // Remove class 'active' if exists in some element
        panel.classList.add('active'); // Add class 'active' to element selected
    });
});

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}