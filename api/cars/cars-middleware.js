// Install vinValidator: npm i vin-validator
// Docs here: https://www.npmjs.com/package/vin-validator
var vinValidator = require('vin-validator');
const Car = require('./cars-model');


const checkCarId = (req, res, next) => {
  // returns a 404 with `{ message: "car with id <car id> is not found" }` if id does not exist in the db.
  console.log('MIDDLE: checkCarId');
  Car.getById(req.params.id)
    .then( response => {
      req.car = response;
      next();
    })
    .catch( error => {
      res.status(500).json({ error: error.message })
    })
}

const checkCarPayload = (req, res, next) => {
  // returns a 400 with `{ message: "<field name> is missing" }` if any required field is missing.
  console.log('MIDDLE: checkCarPayload');
  next();
  
}

const checkVinNumberValid = (req, res, next) => {
  // returns a 400 with `{ message: "vin <vin number> is invalid" }` if the vin # is [invalid]
  // var isValidVin = vinValidator.validate('11111111111111111'); // true
  console.log('MIDDLE: checkVinNumberValid');
  next();
  
}

const checkVinNumberUnique = (req, res, next) => {
  // returns a status 400 with `{ message: "vin <vin number> already exists" }` if the vin # already exists
  console.log('MIDDLE: checkVinNumberUnique');
  next();

}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
}
