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
    })
}

$('#formulario-cadastro').on('submit', criarUsuario)



