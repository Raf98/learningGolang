const criarPublicacao = (evento) => {
    evento.preventDefault();

    $.ajax({
        url: '/publicacoes',
        method: 'POST',
        data: {
            titulo: $('#titulo').val(),
            conteudo: $('#conteudo').val()
        }
    }).done(() => {
        window.location = '/home';
    }).fail(() => {
        alert("Erro ao criar a publicação!");
    });
}

$('#nova-publicacao').on('submit', criarPublicacao)