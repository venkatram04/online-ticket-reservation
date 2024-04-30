document.addEventListener('DOMContentLoaded', function() {
    const sourceInput = document.getElementById('source');
    const destinationInput = document.getElementById('destination');
    
    // Function to display a popup message
    function displayPopup(message) {
        alert(message);
    }
    
    // Function to check if source and destination are equal
    function checkSourceDestination() {
        const sourceValue = sourceInput.value.trim().toLowerCase();
        const destinationValue = destinationInput.value.trim().toLowerCase();
        
        if (sourceValue === destinationValue) {
            displayPopup('Source and destination cannot be the same.');
            // Clear the input fields
            sourceInput.value = '';
            destinationInput.value = '';
        }
    }
    
    // Event listener for form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        checkSourceDestination();
        event.preventDefault(); // Prevent form submission
    });
});

