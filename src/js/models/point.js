//crio uma classe para o ponto onde no contrutor tem o id, o user, a data e o tempo
class Point {
    constructor(){
        this._id;
        this._user;
        this._date;
        this._time;
    }
    //metodo para criar um id
    #setId(){
        return Math.round(Math.random() * (9999 - 1000) + 1000);
    }
    //metodo para criar um ponto
    create(user,date,time){
        //retiro os 0 e : da string, se tiver numero, é pq o cronometro não estava zeradoS
        let verify = time.replace(/[(0)(:)]/g,'');
        if(verify.length > 0){
            this._id = this.#setId();
            this._user= user;
            this._date= date;
            this._time= time;
        }
        else{
            throw new Error('O tempo não pode estar zerado.') 
        }
    }
    //metodo para retornar o valor do ponto
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
