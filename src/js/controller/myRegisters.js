//carrego todos os registros de pontos do usuario

//importo o modelo de registro
import Register from '../models/register.js'


//coleto a tabela de registro 
let table = document.getElementById('table');

//carrego todos os registros de um usuario
const registers = new Register(table);

//atualizo na tela
registers.save()
