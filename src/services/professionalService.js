const professionalModel = require("../models/professionalModel");

function validarProfissional(profissional) {
    const { nome, especialidade, telefone, ativo } = profissional;

    if (
        nome === undefined ||
        especialidade === undefined ||
        telefone === undefined ||
        ativo === undefined
    ) {
        const erro = new Error(
            "Nome, especialidade, telefone e ativo são obrigatórios."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (typeof nome !== "string" || nome.trim() === "") {
        const erro = new Error("O nome deve ser um texto válido.");
        erro.statusCode = 400;
        throw erro;
    }

    if (
        typeof especialidade !== "string" ||
        especialidade.trim() === ""
    ) {
        const erro = new Error(
            "A especialidade deve ser um texto válido."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (typeof telefone !== "string" || telefone.trim() === "") {
        const erro = new Error(
            "O telefone deve ser enviado como texto."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (typeof ativo !== "boolean") {
        const erro = new Error(
            "O campo ativo deve ser verdadeiro ou falso."
        );
        erro.statusCode = 400;
        throw erro;
    }
}

async function listarProfissionais() {
    return await professionalModel.listar();
}

async function criarProfissional(profissional) {
    validarProfissional(profissional);

    return await professionalModel.criar(profissional);
}

async function atualizarProfissional(id, profissional) {
    validarProfissional(profissional);

    const linhasAfetadas =
        await professionalModel.atualizar(id, profissional);

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

    return linhasAfetadas;
}

module.exports = {
    listarProfissionais,
    criarProfissional,
    atualizarProfissional,
    excluirProfissional
};