const express = require("express")
const carsRouter = require("./cars/cars-router")

const server = express();
server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Hooray! You found us!</h1>')
})

module.exports = server
