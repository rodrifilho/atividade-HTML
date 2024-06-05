function adicionarTarefa() {
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;

    if (titulo === '' || descricao === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    var tabela = document.getElementById("corpo-tabela");
    var novaLinha = tabela.insertRow();

    var cellTitulo = novaLinha.insertCell(0);
    var cellDescricao = novaLinha.insertCell(1);
    var cellAcao = novaLinha.insertCell(2);

    cellTitulo.innerHTML = titulo;
    cellDescricao.innerHTML = descricao;
    cellAcao.innerHTML = '<button onclick="excluirTarefa(this)">Excluir</button>';

    document.getElementById("titulo").value = '';
    document.getElementById("descricao").value = '';
}

function excluirTarefa(botao) {
    var linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
