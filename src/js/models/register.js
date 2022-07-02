//cria um modelo para controlar os registros dos pontos
//no contrutor nos verificamos se o user é admin ou nao
//pegamos a tabela na qual iremos add os registro em tela
// e criamos uma variavel de apoio para os registros
class Register{
    constructor(table,admin=false){
        this.admin = admin;
        this.table = table;
        this._registers = [];
    }
    //coleta os registros
    _get_registers(){
        //se não for admin, entao coletará somente os registros do user logado
        if(!this.admin){
            let email;
            //pega o email da session, ele já diferencia a sessao da extenção
            for(let i=0; i < 2; i++){
                if(sessionStorage.key(i) != 'IsThisFirstTime_Log_From_LiveServer'){
                    email = sessionStorage.key(i)
                }
            }
            //coleta os registros que estão no localStorage
            for(let i=0; i < localStorage.length; i++){
                //pega somente os registros que nao sao de user
                let point = !localStorage.key(i).includes('@');
                if(point){
                    //pega o item no localStorage
                    let key = localStorage.key(i)
                    let register = localStorage.getItem(key);
                    //coloca no formato json
                    register = JSON.parse(register);
                    //verifica se o user no registro é o user da sessão
                    if(register._user == email){
                        //coloca na variavel de apoio
                        this._registers.push(register);
                    }
                }
            }
        }
        //se for admin, coleta todos os registros repetindo os passos da linha 23
        // removendo a verificação de user da linha 33
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
    //atualiza na tela as informações coletadas
    save(){
        //chama a função que coleta os registros
        this._get_registers();
        //para cada registro cria uma linha na tabela 
        this._registers.forEach((register) => {
            //cria uma linha
            let tr = document.createElement('tr');
            //cria os cabeçalhos
            let user = document.createElement('th');
            let date = document.createElement('th');
            let time = document.createElement('th');
            //atualiza os cabeçalhos
            user.innerHTML = register._user;
            date.innerHTML = register._date;
            time.innerHTML = register._time;
            //add os cabeçalhos na linha
            tr.appendChild(user);
            tr.appendChild(date);
            tr.appendChild(time);
            //add a linha na coluna
            table.appendChild(tr)
        }) 
    }
}
//exporta o modulo
export default Register;