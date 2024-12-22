/**
 * Clase para el manejo de excepciones personalizadas
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
class ValidateException extends Error {
  constructor(menssage, code, error, type) {
    super(menssage);
    this.code = code;
    this.type = type;
    this.error = error;
  }
}
  
export default ValidateException;