/**
 * Tab functionality to switch between menu categories
 */
function openMenuTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show current tab and add active class to button
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
    
    // Smooth scroll to top on mobile for better UX
    if(window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Image Toggle functionality: 
 * Shows/Hides the item image when the card is clicked
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('show-image');
        });

        // Accessibility: Allow toggling with Enter key
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                item.classList.toggle('show-image');
            }
        });
    });
});

/**
 * Toggle functionality for Tea options
 */
function toggleTeaOptions(evt) {
    // Σταματάει το κλικ από το να ενεργοποιήσει το γενικό άνοιγμα της εικόνας του menu-item
    evt.stopPropagation(); 
    
    // Βρίσκει το κοντινότερο div με τα options του τσαγιού
    const optionsDiv = evt.target.closest('.item-content').querySelector('.tea-options');
    
    // Εναλλαγή εμφάνισης/απόκρυψης
    if (optionsDiv.style.display === 'none' || optionsDiv.style.display === '') {
        optionsDiv.style.display = 'block';
        evt.target.innerText = 'Απόκρυψη';
    } else {
        optionsDiv.style.display = 'none';
        evt.target.innerText = 'Περισσότερα';
   
    }
        }
