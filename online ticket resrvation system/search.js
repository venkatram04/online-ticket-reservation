document.getElementById('calculate-price').addEventListener('click', function() {
    var ticketType = document.getElementById('ticket-type').value;
    var price = 0;

    // Calculate price based on selected ticket type
    switch(ticketType) {
        case 'General':
            price = 400;
            break;
        case '3-Tier':
            price = 500;
            break;
        case '2-Tier':
            price = 600;
            break;
        case '1-Tier':
            price = 800;
            break;
    }

    // Display the price
    document.getElementById('price').textContent = 'Price: ' + price + ' (in rupees)';
});
