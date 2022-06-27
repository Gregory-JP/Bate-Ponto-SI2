//crio uma classe para permissao passando o user e uma autenticação no construtor
class Permission {
    constructor(user,authenticat){
        this._user= user;
        this._authenticat= authenticat;
    }
    //crio uma função para retornar os dados
    value(){
        return {
            user: this._user,
            authenticat: this._authenticat
        }
    }
}
//exporto esse modulo
export default Permission;