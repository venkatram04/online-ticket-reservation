document.getElementById("book-ticket").addEventListener("click", function() {
    // Show loading message
    alert("Loading Payment...");

    // Redirect to ticket details page
    window.location.href = "ticket_details.html";
});

// Function to display price details
function displayPrice(selectedOption) {
    var priceDetails = document.getElementById("price-details");
    switch(selectedOption) {
        case "general":
            priceDetails.textContent = "Ticket Cost: 400 (in rupees)";
            break;
        case "3-tier":
            priceDetails.textContent = "Ticket Cost: 500 (in rupees)";
            break;
        case "2-tier":
            priceDetails.textContent = "Ticket Cost: 600 (in rupees)";
            break;
        case "1-tier":
            priceDetails.textContent = "Ticket Cost: 800 (in rupees)";
            break;
        default:
            priceDetails.textContent = "";
    }
}
