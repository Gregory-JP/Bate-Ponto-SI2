class Permission {
    constructor(user,authenticat){
        this._user= user;
        this._authenticat= authenticat;
    }
    value(){
        return {
            user: this._user,
            authenticat: this._authenticat
        }
    }
}

export default Permission;