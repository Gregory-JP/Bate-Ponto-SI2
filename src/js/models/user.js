//crio uma classe pro usuario, onde temos no construtor o email e senha dele e
//um campo de admin onde por padrao é false
class User {
    constructor(email,password,isAdmin=false){
        this.email = email,
        this.passaword = password,
        this.isAdmin = isAdmin
    }
    //metodo para retornar os dados do usuario
    value(){
        return{
            email: this.email,
            password: this.passaword
        }
    }
}
//exporta o modulo user
export default User;