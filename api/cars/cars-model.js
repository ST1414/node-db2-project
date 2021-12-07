const db = require('../../data/db-config');

const getAll = async () => {
  const getAll = await db('cars')
  return getAll;
}

const getById = async (id) => {
  const car = await db('cars')
    .where('id', id)
    .first()
  return car;
}

const create = async (car) => {
  const newCarId = await db('cars')
    .insert(car);
  const newCar = getById(newCarId);
  return newCar;
}

const getByVin = async (vin) => {
  const car = await db('cars')
    .where('vin', vin)
  return car;
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
}