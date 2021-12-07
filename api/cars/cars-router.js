const express = require('express');
const router = express.Router();

// ========== Middleware ========== 
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid,} = require('./cars-middleware');

// ========== Model ==========
const Car = require('./cars-model');


// ========== Routes ==========
router.get('/', (req, res, next) => {
    // returns an array of cars sorted by id
    // (or an empty array if there aren't any).
    Car.getAll()
        .then( response => {
            res.json(response);
        })
        .catch( error => {
            next(error)
        })
})

router.get('/:id', checkCarId, (req, res, next) => {
    // returns a car by the given id
    res.json(req.car);
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, (req, res, next) => {
    // returns the created car.
    console.log('post / route')
    res.json({message: `post / route`});

})


// ========== Error Handling ==========
router.use((err, req, res, next) => { // eslint-disable-line
    console.log('ERROR HANDLING')
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
