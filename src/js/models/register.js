class Register{
    constructor(table,admin=false){
        this.admin = admin;
        this.table = table;
        this._registers = [];
        this._dates = [];
    }
    _get_registers(){
        if(!this.admin){
            let email;
            for(let i=0; i < 2; i++){
                if(sessionStorage.key(i) != 'IsThisFirstTime_Log_From_LiveServer'){
                    email = sessionStorage.key(i)
                }
            }
            for(let i=0; i < localStorage.length; i++){
                let point = !localStorage.key(i).includes('@');
                if(point){
                    let key = localStorage.key(i)
                    let register = localStorage.getItem(key);
                    register = JSON.parse(register);
                    if(register._user == email){
                        console.log(email)
                        console.log(register._user)
                        this._registers.push(register);
                    }
                }
            }
        }
        else{
            for(let i=0; i < localStorage.length; i++){
                let point = !localStorage.key(i).includes('@');
                if(point){
                    let key = localStorage.key(i)
                    let register = localStorage.getItem(key);
                    register = JSON.parse(register)
                    this._registers.push(register);
                }
            }
        }
    }
    save(){
        this._get_registers();
        this._registers.forEach((register) => {
  
            let tr = document.createElement('tr');
            let user = document.createElement('th');
            let date = document.createElement('th');
            let time = document.createElement('th');

            user.innerHTML = register._user;
            date.innerHTML = register._date;
            time.innerHTML = register._time;

            tr.appendChild(user);
            tr.appendChild(date);
            tr.appendChild(time);

            table.appendChild(tr)
        }) 
    }
}

export default Register;