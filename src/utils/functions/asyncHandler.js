/**
 * Función que maneja errores asíncronos
 *
 * @param {*} fn Función asíncrona
 * @returns Función asíncrona
 *
 * @autor Cristian David Herrera
 * @date 2024-12-21
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default asyncHandler;
