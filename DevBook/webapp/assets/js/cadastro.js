const getValue = (fieldName) => {
    return $(`#${fieldName}`).val();
}

const criarUsuario = (evento) => {
    evento.preventDefault();

    if (getValue('senha') != getValue('confirmar-senha')) {
        Swal.fire('Ops...', 'As senhas não coincidem!', 'error');
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
        Swal.fire('Sucesso!', 'Usuário cadastrado com sucesso!', 'success')
            .then(() => {
                $.ajax({
                    url: '/login',
                    method: 'POST',
                    data: {
                        email: $('#email').val(),
                        senha: $('#senha').val()
                    }
                }).done(() => {
                    window.location = '/home';
                }).fail(() => {
                    Swal.fire('Ops...', 'Erro ao autenticar o usuário!', 'error')
                })
            });
    }).fail(function(erro) {
        console.log(erro);
        Swal.fire('Ops...', 'Erro ao cadastrar o usuário!', 'error');
    })
}

$('#formulario-cadastro').on('submit', criarUsuario)



