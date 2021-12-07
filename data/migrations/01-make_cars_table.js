exports.up = async function (knex) {
  
   await knex.schema.createTable('cars', table => {
     table.increments('id');

     table.text('vin')
      .notNullable()
      .unique();
    
    table.text('make')
      .notNullable();

    table.text('model')
      .notNullable();

    // mileage, number, required
    table.decimal('mileage')
      .notNullable();

    // title, string, optional
    table.text('title');

    // transmission, string, optional  
    table.text('transmission');

   })

};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars');
};
