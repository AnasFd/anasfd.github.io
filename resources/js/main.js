function toggleDetails(headerElement) {
    const details = headerElement.nextElementSibling;
    const button = headerElement.querySelector('.toggle-btn');
    
    // Toggle visibility
    details.classList.toggle('show');

    // Toggle the button rotation
    button.classList.toggle("expanded");
}