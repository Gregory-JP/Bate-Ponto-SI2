class Validation{
    constructor(email,password=null){
        this.email = email;
        this.password = password;
        this._email = /\S+@\S+\.\S+/
        this._password = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{6,20}$/;
    }
    valid(){
        return  (this._email.test(this.email) && this._password.test(this.password))
    }
}

export default Validation;