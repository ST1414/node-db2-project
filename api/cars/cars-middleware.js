// Install vinValidator: npm i vin-validator
// Docs here: https://www.npmjs.com/package/vin-validator
var vinValidator = require('vin-validator');
const Car = require('./cars-model');


const checkCarId = (req, res, next) => {
  // returns a 404 with `{ message: "car with id <car id> is not found" }` 
  // if id does not exist in the db.
  Car.getById(req.params.id)
    .then( response => {
      if (response) {
        req.car = response;
        next();
      } else {
        res.status(404).json({ message: `car with id ${req.params.id} is not found` })
      }
    })
    .catch( error => {
      res.status(500).json({ error: error.message })
    })
}

const checkCarPayload = (req, res, next) => {
  // returns a 400 with `{ message: "<field name> is missing" }` 
  // if any required field is missing.
  let fieldMissing = '';
  if (req.body.vin === undefined ){ 
    fieldMissing = 'vin'; 
  } 
  if (req.body.make === undefined ){
    fieldMissing = 'make';
  }
  if (req.body.model === undefined ){
    fieldMissing = 'model';
  }
  if (req.body.mileage === undefined ){
    fieldMissing = 'mileage';
  }

  if (fieldMissing === ""){
    next();
  } else {
    res.status(400).json({ message: `${fieldMissing} is missing` })
  }
  
}

const checkVinNumberValid = (req, res, next) => {
  // returns a 400 with `{ message: "vin <vin number> is invalid" }` if the vin # is [invalid]
  
  var isValidVin = vinValidator.validate(req.body.vin); // will return true if valid
  if (isValidVin){
    next();
  } else {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
  }
  
}

const checkVinNumberUnique = (req, res, next) => {
  // returns a status 400 with `{ message: "vin <vin number> already exists" }` if the vin # already exists

  Car.getByVin(req.body.vin)
  .then( response => {
    if (response.length === 0){
      next();
    } else {
      res.status(400).json({ message: `vin ${req.body.vin} already exists` })
    }
  })
  .catch( error => {
    res.status(500).json({ error: error.message});
  })

}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
}
