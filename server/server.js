const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Choose a port number

// Middleware to parse JSON data
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const activitiesRoute = require('./routes/activities');
const logHoursRoute = require('./routes/logHours');

// ...

app.use('/api', activitiesRoute);
app.use('/api', logHoursRoute);
