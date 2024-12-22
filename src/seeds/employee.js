/**
 * Función para insertar datos de prueba en la tabla empleado
 * @param {*} knex Objeto de conexión a la base de datos
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
export async function seed(knex) {

  await knex(`${process.env.DB_SCHEMA}.empleado`).insert([
    {
      id: 1000635463,
      fecha_ingreso: '2023-01-01',
      nombre: 'Juan Pérez',
      salario: 3000.00
    },
    {
      id: 1037625785,
      fecha_ingreso: '2023-02-15',
      nombre: 'Ana Gómez',
      salario: 3500.00
    },
    {
      id: 5094531,
      fecha_ingreso: '2023-03-20',
      nombre: 'Carlos Díaz',
      salario: 4000.00
    }
  ]);
}
