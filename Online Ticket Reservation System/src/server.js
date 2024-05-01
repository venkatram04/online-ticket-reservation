// Import required modules
const express = require('express');
const pool = require('./db'); // Import the database connection pool

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json()); // Add JSON body parser middleware

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle search
app.get('/search', (req, res) => {
    const { source, destination } = req.query;
    
    // Check if source is Chennai and destination is Tirupathi
    if (source.toLowerCase() === 'chennai' && destination.toLowerCase() === 'tirupathi') {
        // Query database to get all data from cTt table
        pool.query('SELECT * FROM cTt', (error, results) => {
            if (error) {
                console.error('Error fetching data from database:', error);
                res.status(500).send('Error fetching data from database: ' + error.message); // Send detailed error message
            } else {
                res.json(results);
            }
        });
    } 
    // Check if source is Hyderabad and destination is Tirupathi
    else if (source.toLowerCase() === 'hyderabad' && destination.toLowerCase() === 'tirupathi') {
        // Query database to get all data from hTt table
        pool.query('SELECT * FROM hTt', (error, results) => {
            if (error) {
                console.error('Error fetching data from database:', error);
                res.status(500).send('Error fetching data from database: ' + error.message); // Send detailed error message
            } else {
                res.json(results);
            }
        });
    } 
    // If source and destination don't match any known routes
    else {
        res.status(404).send('No trains available for the specified route');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
