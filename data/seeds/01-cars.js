  // (1) Truncating a table deletes all existing entries and reset the primary keys
  // (2) Update table name to 'fruits'
  // (3) Inserts seed entries under the THEN statement
  // (4) Update table name to 'fruits'
  // (5) Add data to the return statement
  
exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert([
        {
            vin: '11111111111111111',
            make: 'Subaru',
            model: 'Forester',
            mileage: 30000,
            title: 'My car',
            transmission: 'cvt'
        },
        {
            vin: '22222222222222222',
            make: 'Subaru',
            model: 'Impreza STI',
            mileage: 20000,
            title: 'My old car',
            transmission: 'manual'
        },
        {
            vin: '33333333333333333',
            make: 'Subaru',
            model: 'Impreza WRX',
            mileage: 50000,
            title: 'My tuner car',
            transmission: 'manual'
        },
        {
            vin: '44444444444444444',
            make: 'Ford',
            model: 'Ranger',
            mileage: 200000,
            title: 'My college car',
            transmission: 'automatic'
        },
        {
            vin: '55555555555555555',
            make: 'BMW',
            model: '2002',
            mileage: 50000,
            title: 'One of several cars I want',
            transmission: 'manual'
        }
    ])
}