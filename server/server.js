const express = require('express')
const path = require('path')

const app = express();
const port = process.env.PORT || 4001

// Load the ACM recommendations router
app.use('/recommendations', require('./routers/recommendations'))

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`))