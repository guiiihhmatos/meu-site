var nome = 'Guilherme'
var pass = '1234'

function enviar (){
    email = document.cd.email.value
    senha = document.cd.email.value

    if ((nome == email) && (pass == senha)){
        alert('Seja Bem vindo')
    }  else {
        alert('Email ou senha incorreto')
    }
}