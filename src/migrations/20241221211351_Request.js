  /**
 * Función que crea la tabla solicitud en la base de datos
 * @param {*} knex Objeto de conexión a la base de datos
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
  export async function up(knex) {

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
  
  /**
   * Función que elimina la tabla solicitud en la base de datos
   * @param {*} knex Objeto de conexión a la base de datos
   * 
   * @author Cristian David Herrera
   * @date 2024-12-21
   */
  export async function down(knex) {
    await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).dropTable('solicitud');
  }
  