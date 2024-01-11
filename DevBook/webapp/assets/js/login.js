$('#login').on('submit', fazerLogin);

function fazerLogin(evento) {
    evento.preventDefault();

    $.ajax({
        url: '/login',
        method: 'POST',
        data: {
            email: $('#email').val(),
            senha: $('#senha').val()
        }
    }).done(() => {
        window.location = '/home';
    }).fail((data, textStatus, error) => {
        console.log('STATUS: ' + data.status + " - " + textStatus);
        console.log('ERRO: ', error);

        if (data.status === 200) {
            window.location = '/home';
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
}