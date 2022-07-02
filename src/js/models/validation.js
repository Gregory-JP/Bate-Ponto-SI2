//cria um modelo de validação de campos, onde os campos são email e senha
class Validation{
    constructor(email,password){
        this.email = email;
        this.password = password;
        this._email = /\S+@\S+\.\S+/
        this._password = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{6,20}$/;
    }
    valid(){
        //testa o regex criado no construtor
        return  (this.email != 'admin@admin.com' && this._email.test(this.email) && this._password.test(this.password))
    }
}
//exporta o modulo
export default Validation;