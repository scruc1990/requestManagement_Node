class ValidateException extends Error {
    constructor(menssage, code, type) {
      super(menssage);
      this.code = code;
      this.type = type;
    }
  }
  
  export default ValidateException;