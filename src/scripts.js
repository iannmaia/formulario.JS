function validarFormulario() {
    console.log("Iniciando validação do formulário...");

    var nomeUsuario = document.getElementById("nomeUsuario").value;
    var nomeProduto = document.getElementById("nomeProduto").value;
    var descricaoProduto = document.getElementById("descricaoProduto").value;
    var precoProduto = document.getElementById("precoProduto").value;
    var categoriaProduto = document.getElementById("categoriaProduto").value;
    var quantidadeProduto = document.getElementById("quantidadeProduto").value;
    var dataFabricacao = document.getElementById("dataFabricacao").value;
    var fabricanteProduto = document.getElementById("fabricanteProduto").value;
    var imagemProduto = document.getElementById("imagemProduto").value;
    var validadeProduto = document.getElementById("validadeProduto").value;

    var errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function(message) {
        message.remove();
    });
    console.log("Mensagens de erro antigas removidas.");

    if (nomeUsuario == "") {
        console.log("Erro: Nome do Usuário não preenchido.");
        exibirErro("nomeUsuario", "Por favor, preencha seu nome.");
        return false;
    }
    console.log("Nome do Usuário válido:", nomeUsuario);

    if (nomeProduto == "") {
        console.log("Erro: Nome do Produto não preenchido.");
        exibirErro("nomeProduto", "Por favor, informe o nome do produto.");
        return false;
    }
    console.log("Nome do Produto válido:", nomeProduto);

    if (descricaoProduto == "") {
        console.log("Erro: Descrição do Produto não preenchida.");
        exibirErro("descricaoProduto", "Por favor, informe a descrição do produto.");
        return false;
    }
    console.log("Descrição do Produto válida:", descricaoProduto);

    if (precoProduto == "" || isNaN(precoProduto) || precoProduto <= 0) {
        console.log("Erro: Preço do Produto inválido:", precoProduto);
        exibirErro("precoProduto", "Por favor, informe um preço válido para o produto.");
        return false;
    }
    console.log("Preço do Produto válido:", precoProduto);

    if (categoriaProduto == "") {
        console.log("Erro: Categoria do Produto não selecionada.");
        exibirErro("categoriaProduto", "Por favor, selecione uma categoria para o produto.");
        return false;
    }
    console.log("Categoria do Produto válida:", categoriaProduto);

    if (quantidadeProduto == "" || isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        console.log("Erro: Quantidade do Produto inválida:", quantidadeProduto);
        exibirErro("quantidadeProduto", "Por favor, informe uma quantidade válida.");
        return false;
    }
    console.log("Quantidade do Produto válida:", quantidadeProduto);

    if (dataFabricacao == "") {
        console.log("Erro: Data de Fabricação não preenchida.");
        exibirErro("dataFabricacao", "Por favor, informe a data de fabricação.");
        return false;
    }
    console.log("Data de Fabricação válida:", dataFabricacao);

    if (fabricanteProduto == "") {
        console.log("Erro: Fabricante do Produto não preenchido.");
        exibirErro("fabricanteProduto", "Por favor, informe o fabricante do produto.");
        return false;
    }
    console.log("Fabricante do Produto válido:", fabricanteProduto);

    if (imagemProduto == "") {
        console.log("Erro: Imagem do Produto não fornecida.");
        exibirErro("imagemProduto", "Por favor, forneça um link para a imagem do produto.");
        return false;
    }
    console.log("Imagem do Produto válida:", imagemProduto);

    if (validadeProduto == "") {
        console.log("Erro: Data de Validade não preenchida.");
        exibirErro("validadeProduto", "Por favor, informe a data de validade do produto.");
        return false;
    }
    console.log("Data de Validade válida:", validadeProduto);

    console.log("Formulário validado com sucesso!");
    return true;
}

function exibirErro(id, mensagem) {
    console.log(`Exibindo erro no campo: ${id} - ${mensagem}`);
    var campo = document.getElementById(id);
    var errorElement = document.createElement("div");
    errorElement.classList.add("error");
    errorElement.innerText = mensagem;
    campo.parentElement.appendChild(errorElement);
}
