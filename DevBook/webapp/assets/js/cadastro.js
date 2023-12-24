const getValue = (fieldName) => {
    return $(`#${fieldName}`).val();
}

const criarUsuario = (evento) => {
    evento.preventDefault();

    if (getValue('senha') != getValue('confirmar-senha')) {
        alert("As senhas não coincidem!");
        return;
    }

    $.ajax({
        url: '/usuarios',
        method: 'POST',
        data: {
            nome: getValue('nome'),
            email: getValue('email'),
            nick: getValue('nick'),
            senha: getValue('senha')
        }
    }).done(function () {
        alert("Usuário cadastrado com sucesso!");
    }).fail(function(erro) {
        console.log(erro);
        alert("Erro ao cadastrar o usuário!");
    })
}

$('#formulario-cadastro').on('submit', criarUsuario)



