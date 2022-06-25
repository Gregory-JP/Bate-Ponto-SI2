class User {
    constructor(name,email,password,isAdmin=false){
        this.name = name,
        this.email = email,
        this.passaword = password,
        this.isAdmin = isAdmin
    }
}
export default User;