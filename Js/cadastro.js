class Cadastro{
    constructor(nome, endereco, email, comorbidades,idade, sexo, telefone){
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.comorbidades = comorbidades;
        this.idade = idade;
        this.sexo = sexo;
        this.telefone = telefone;        
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd{
    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(c){
        let id = this.getProximoId() 

        localStorage.setItem(id, JSON.stringify(c))

        localStorage.setItem('id', id)

        if ((comorbidades.value != 'n' || comorbidades.value != 'N') && (idade.value >= 65)) {
            alert(` ${nome.value} Cadastrado com sucesso! ESTÁ NO GRUPO DE RISCO!`);
        }else{
            alert(` ${nome.value} Cadastrado com sucesso!`);
        }

    }
}

let bd = new Bd()

function cadastrarPacientes(){

    let nome = document.getElementById("nome");
    let endereco = document.getElementById("endereco");
    let email = document.getElementById("email");
    let comorbidades = document.getElementById("comorbidades");
    let idade = document.getElementById("idade");
    let sexo = document.getElementById("sexo");
    let telefone = document.getElementById("telefone");

    
    let cadastro = new Cadastro(
        nome.value,
        endereco.value,
        email.value,
        comorbidades.value,
        idade.value,
        sexo.value,
        telefone.value
    )

    if(cadastro.validarDados()){
        bd.gravar(cadastro)
    }
    
}











