const express = require('express');
const ConnectDB = require('./Config/ConnectDB');
const movieRoutes = require('./Routes/movieRoutes');
const userRouters = require('./Routes/userRoutes')
require('dotenv').config()

const app = express();

ConnectDB()

app.use(express.json());

app.use('/api/movie', movieRoutes);
app.use('/api/user', userRouters)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});