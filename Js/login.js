document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault()
    var login = 'Usuário';
    var senha = 'usuario123';

    var inputlogin =( document.getElementById('login')).value;
    var inputsenha =( document.getElementById('senha')).value;


    if (inputlogin === login && inputsenha === senha){
        (document.getElementById('message')).innerHTML = "login bem sucedido";
        var janela = window.open('paginaInicial.html', 'janela')
        var jan = window.close("index.html", "janela1")
    }else {
        (document.getElementById('message')).innerHTML = "usuario ou senha errado";
    }
})