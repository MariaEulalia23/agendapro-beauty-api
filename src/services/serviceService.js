const serviceModel = require("../models/serviceModel");

function validarServico(servico) {
    const { area_id, nome, duracao_min, preco } = servico;

    if (
        area_id === undefined ||
        nome === undefined ||
        duracao_min === undefined ||
        preco === undefined
    ) {
        const erro = new Error(
            "Área, nome, duração e preço são obrigatórios."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (!Number.isInteger(area_id) || area_id <= 0) {
        const erro = new Error(
            "O campo area_id deve ser um número inteiro positivo."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (typeof nome !== "string" || nome.trim() === "") {
        const erro = new Error(
            "O nome deve ser um texto válido."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (!Number.isInteger(duracao_min) || duracao_min <= 0) {
        const erro = new Error(
            "A duração deve ser um número inteiro positivo."
        );
        erro.statusCode = 400;
        throw erro;
    }

    if (typeof preco !== "number" || preco < 0) {
        const erro = new Error(
            "O preço deve ser um número maior ou igual a zero."
        );
        erro.statusCode = 400;
        throw erro;
    }
}

async function listarServicos(areaId) {
    if (areaId !== undefined) {
        const areaConvertida = Number(areaId);

        if (!Number.isInteger(areaConvertida) || areaConvertida <= 0) {
            const erro = new Error(
                "O ID da área deve ser um número inteiro positivo."
            );
            erro.statusCode = 400;
            throw erro;
        }

        return await serviceModel.listar(areaConvertida);
    }

    return await serviceModel.listar();
}

async function criarServico(servico) {
    validarServico(servico);

    return await serviceModel.criar(servico);
}

async function atualizarServico(id, servico) {
    validarServico(servico);

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

    return linhasAfetadas;
}

module.exports = {
    listarServicos,
    criarServico,
    atualizarServico,
    excluirServico
};