
export async function up(knex) {
    console.log(process.env.DB_SCHEMA, '2');
    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).createTable('solicitud', (table) => {
      table.increments('id').primary();
      table.string('codigo', 50).notNullable();
      table.string('descripcion', 50).notNullable();
      table.string('resumen', 50).notNullable();
      table
        .integer('id_empleado')
        .unsigned()
        .references('id')
        .inTable(`${process.env.DB_SCHEMA}.empleado`);
    });
  }
  
  export async function down(knex) {
    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).dropTable('solicitud');
  }
  