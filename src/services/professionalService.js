const professionalModel = require("../models/professionalModel");

async function listarProfissionais() {
    return await professionalModel.listar();
}

async function criarProfissional(profissional) {
    return await professionalModel.criar(profissional);
}

async function atualizarProfissional(id, profissional) {
    const linhasAfetadas = await professionalModel.atualizar(id, profissional);

    if (linhasAfetadas === 0) {
        const erro = new Error("Profissional não encontrado.");
        erro.statusCode = 404;
        throw erro;
    }

    return linhasAfetadas;
}

async function excluirProfissional(id) {
    const linhasAfetadas = await professionalModel.excluir(id);

    if (linhasAfetadas === 0) {
        const erro = new Error("Profissional não encontrado.");
        erro.statusCode = 404;
        throw erro;
    }
}

module.exports = {
    listarProfissionais,
    criarProfissional,
    atualizarProfissional,
    excluirProfissional
};