export async function up(knex) {
    console.log(process.env.DB_SCHEMA, '1');
      await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).createTable('usuario', (table) => {
        table.increments('id').primary();
        table.string('usuario', 100).notNullable();
        table.string('contraseña', 200).notNullable();
      });
    }
    
    export async function down(knex) {
      await knex.schema.withSchema(`${process.env.DB_SCHEMA}`).dropTable('usuario');
    }
    