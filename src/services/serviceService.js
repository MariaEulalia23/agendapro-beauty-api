const serviceModel = require("../models/serviceModel");

async function listarServicos() {
    return await serviceModel.listar();
}

async function criarServico(dados) {

    if (!dados.nome || !dados.area_id) {
        const erro = new Error("Nome e área são obrigatórios.");
        erro.statusCode = 400;
        throw erro;
    }

    const id = await serviceModel.criar(dados);

    return id;
}

async function atualizarServico(id, servico) {
    const linhasAfetadas = await serviceModel.atualizar(id, servico);

    if (linhasAfetadas === 0) {
        const erro = new Error("Serviço não encontrado.");
        erro.statusCode = 404;
        throw erro;
    }

    return linhasAfetadas;
}

async function excluirServico(id) {
    const linhasAfetadas = await serviceModel.excluir(id);

    if (linhasAfetadas === 0) {
        const erro = new Error("Serviço não encontrado.");
        erro.statusCode = 404;
        throw erro;
    }
}

module.exports = {
    listarServicos,
    criarServico,
    atualizarServico,
    excluirServico
};