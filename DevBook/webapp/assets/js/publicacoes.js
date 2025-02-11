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
        Swal.fire('Ops...', 'Erro ao criar a publicação!', 'error');
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
        Swal.fire('Ops...', 'Erro ao curtir a publicação!', 'error');
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
        Swal.fire('Ops...', 'Erro ao descurtir a publicação!', 'error');
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
        Swal.fire('Sucesso!', 'Publicação editada com sucesso!', 'success')
            .then(() => window.location = '/home');
    }).fail(() => {
        Swal.fire('Ops...', 'Erro ao editar a publicação!', 'error');
    }).always(() => {
        $('#atualizar-publicacao').prop('disabled', false);
    })
}

function deletarPublicacao(evento) {
    evento.preventDefault();

    Swal.fire({
        title: 'Atenção!',
        text: 'Tem certeza que deseja excluir essa publicação? Essa ação é irreversível!',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        icon: 'warning'
    }).then((confirmacao) => {
        if (!confirmacao.value) return;
        const elementoClicado = $(evento.target);
        const publicacao = elementoClicado.closest('div');
        const publicacaoId = publicacao.data('publicacao-id');

        elementoClicado.prop('disabled', true);

        $.ajax({
            url: `/publicacoes/${publicacaoId}`,
            method: 'DELETE'
        }).done(() => {
            publicacao.fadeOut("slow", function () {
                $(this).remove();
            });
        }).fail(() => {
            Swal.fire('Ops...', 'Erro ao excluir a publicação!', 'error');
        });
    });
}

$('#nova-publicacao').on('submit', criarPublicacao);

$(document).on('click', '.curtir-publicacao', curtirPublicacao);
$(document).on('click', '.descurtir-publicacao', descurtirPublicacao);

$('#atualizar-publicacao').on('click', atualizarPublicacao);
$('.deletar-publicacao').on('click', deletarPublicacao);