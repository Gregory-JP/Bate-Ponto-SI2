//carrego todos os registros de pontos

//importo o modelo de registro
import Register from '../models/register.js'


//coleto a tabela de registro 
let table = document.getElementById('table');

//carrego todos os registros
const registers = new Register(table,true);

//atualizo na tela
registers.save()
