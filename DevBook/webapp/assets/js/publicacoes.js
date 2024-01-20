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

const curtirPublicacao = (evento) => {
    evento.preventDefault();

    const elementoClicado = $(evento.target);
    const publicacaoId = elementoClicado.closest('div').data('publicacao-id');

    elementoClicado.prop('disabled', true);

    $.ajax({
        url: `/publicacoes/${publicacaoId}/curtir`,
        method: 'POST'
    }).done(() => {
        const contadorDeCurtidas = elementoClicado.next('span');
        const quantidadeDeCurtidas = parseInt(contadorDeCurtidas.text());

        contadorDeCurtidas.text(quantidadeDeCurtidas + 1);

        elementoClicado.addClass('descurtir-publicacao');
        elementoClicado.addClass('text-danger');
        elementoClicado.removeClass('curtir-publicacao');
    }).fail(() => {
        alert("Erro ao curtir a publicação!");
    }).always(() => {
        elementoClicado.prop('disabled', false);
    });
}

const descurtirPublicacao = (evento) => {
    evento.preventDefault();

    const elementoClicado = $(evento.target);
    const publicacaoId = elementoClicado.closest('div').data('publicacao-id');

    elementoClicado.prop('disabled', true);

    $.ajax({
        url: `/publicacoes/${publicacaoId}/descurtir`,
        method: 'POST'
    }).done(() => {
        const contadorDeCurtidas = elementoClicado.next('span');
        const quantidadeDeCurtidas = parseInt(contadorDeCurtidas.text());

        contadorDeCurtidas.text(quantidadeDeCurtidas - 1);

        elementoClicado.removeClass('descurtir-publicacao');
        elementoClicado.removeClass('text-danger');
        elementoClicado.addClass('curtir-publicacao');
    }).fail(() => {
        alert("Erro ao descurtir a publicação!");
    }).always(() => {
        elementoClicado.prop('disabled', false);
    });
}

function atualizarPublicacao() {
    $(this).prop('disabled', true);

    console.log($(this))
    const publicacaoId = $(this).data('publicacao-id');
    console.log(publicacaoId)

    $.ajax({
        url: `/publicacoes/${publicacaoId}`,
        method: "PUT",
        data: {
            titulo: $('#titulo').val(),
            conteudo: $('#conteudo').val(),
        }
    }).done(() => {
        alert("Publicação editada com sucesso!")
    }).fail(() => {
        alert("Erro ao editar a publicação!");
    }).always(() => {
        $('#atualizar-publicacao').prop('disabled', false);
    })
}

function deletarPublicacao(evento) {
    evento.preventDefault();

    const elementoClicado = $(evento.target);
    const publicacao =  elementoClicado.closest('div');
    const publicacaoId = publicacao.data('publicacao-id');

    elementoClicado.prop('disabled', true);

    $.ajax({
        url: `/publicacoes/${publicacaoId}`,
        method: 'DELETE'
    }).done(() => {
        publicacao.fadeOut("slow", function() {
            $(this).remove();
        });
    }).fail(() => {
        alert("Erro ao excluir a publicação!");
    });
}

$('#nova-publicacao').on('submit', criarPublicacao);

$(document).on('click', '.curtir-publicacao', curtirPublicacao);
$(document).on('click', '.descurtir-publicacao', descurtirPublicacao);

$('#atualizar-publicacao').on('click', atualizarPublicacao);
$('.deletar-publicacao').on('click', deletarPublicacao);