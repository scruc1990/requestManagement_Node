  /**
   * Función que crea la tabla empleado en la base de datos
   * @param {*} knex Objeto de conexión a la base de datos
   * 
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  export async function up(knex) {

    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).createTable('empleado', (table) => {
      table.integer('id').primary();
      table.date('fecha_ingreso').notNullable();
      table.string('nombre', 50).notNullable();
      table.decimal('salario', 15, 2).notNullable();
    });
  }
  
  /**
   * Función que elimina la tabla empleado en la base de datos
   * @param {*} knex Objeto de conexión a la base de datos
   * 
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  export async function down(knex) {
    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).dropTable('empleado');
  }
  