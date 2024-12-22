/**
 * Clase para el manejo de excepciones personalizadas
 * 
 * @author Cristian David Herrera
 * @date 2024-12-21
 */
class ValidateException extends Error {
  constructor(menssage, code, type) {
    super(menssage);
    this.code = code;
    this.type = type;
  }
}
  
export default ValidateException;