// app.js

const express = require('express');
const app = express();
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Use home routes
app.use('/', homeRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
