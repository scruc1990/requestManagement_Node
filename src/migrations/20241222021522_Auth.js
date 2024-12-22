/**
 * Función que crea la tabla usuario en la base de datos
 * @param {*} knex Objeto de conexión a la base de datos
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
export async function up(knex) {
  await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).createTable('usuario', (table) => {
    table.increments('id').primary();
    table.string('usuario', 100).notNullable();
    table.string('contraseña', 200).notNullable();
  });
}

/**
 * Función que elimina la tabla usuario en la base de datos
 * @param {*} knex Objeto de conexión a la base de datos
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
export async function down(knex) {
  await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).dropTable('usuario');
}
