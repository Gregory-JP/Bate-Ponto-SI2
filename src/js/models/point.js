class Point {
    constructor(){
        this._id;
        this._user;
        this._date;
        this._time;
    }
    #setId(){
        return Math.round(Math.random() * (9999 - 1000) + 1000);
    }
    create(user,date,time){
        this._id = this.#setId();
        this._user= user;
        this._date= date;
        this._time= time;
    }
    value(){
        return {
            'id': this._id,
            'user':this._user,
            'date':this._date,
            'time':this._time,
        };
    }     
}
export default Point;
