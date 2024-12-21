export async function up(knex) {
  console.log(process.env.DB_SCHEMA, '1');
    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).createTable('empleado', (table) => {
      table.integer('id').primary();
      table.date('fecha_ingreso').notNullable();
      table.string('nombre', 50).notNullable();
      table.decimal('salario', 15, 2).notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).dropTable('empleado');
  }
  