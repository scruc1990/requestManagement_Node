/**
 * Función para insertar datos de prueba en la tabla solicitud
 * @param {*} knex  Objeto de conexión a la base de datos
 *
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
export async function seed(knex) {
  await knex(`${process.env.DB_SCHEMA}.solicitud`).insert([
    {
      codigo: 'SOL-001',
      descripcion: 'Descripción 1',
      resumen: 'Resumen 1',
      id_empleado: 1000635463
    },
    {
      codigo: 'SOL-002',
      descripcion: 'Descripción',
      resumen: 'Resumen 2',
      id_empleado: 1037625785
    },
    {
      codigo: 'SOL-003',
      descripcion: 'Descripción 3',
      resumen: 'Resumen 3',
      id_empleado: 5094531
    }
  ]);
}
