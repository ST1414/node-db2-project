const express = require('express');
const router = express.Router();
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid,} = require('./cars-middleware');

router.get('/', (req, res) => {
    // returns an array of cars sorted by id (or an empty array if there aren't any).
    console.log('get / route')
    res.json({message: 'get / route'});
})

router.get('/:id', checkCarId, (req, res) => {
    // returns a car by the given id.
    console.log('get /:id route')
    res.json({message: `get /:id (${req.params.id}) route`});
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, (req, res) => {
    // returns the created car.
    console.log('post / route')
    res.json({message: `post / route`});

})

module.exports = router;
