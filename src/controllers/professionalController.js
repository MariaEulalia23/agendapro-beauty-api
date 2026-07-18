const professionalService = require("../services/professionalService");

async function listar(req, res) {
    try {
        const profissionais = await professionalService.listarProfissionais();
        res.json(profissionais);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function criar(req, res) {
    try {
        const id = await professionalService.criarProfissional(req.body);

        res.status(201).json({
            mensagem: "Profissional cadastrado com sucesso!",
            id
        });

    } catch (erro) {
        res.status(500).json({
            erro: erro.message
        });
    }
}

async function atualizar(req, res) {
    try {
        const id = req.params.id;

        await professionalService.atualizarProfissional(id, req.body);

        res.json({
            mensagem: "Profissional atualizado com sucesso!"
        });
    } catch (erro) {
        res.status(erro.statusCode || 500).json({
            erro: erro.message
        });
    }
}

async function excluir(req, res) {
    try {
        const id = req.params.id;

        await professionalService.excluirProfissional(id);

        res.json({
            mensagem: "Profissional excluído com sucesso!"
        });

    } catch (erro) {
        res.status(erro.statusCode || 500).json({
            erro: erro.message
        });
    }
}

module.exports = {
    listar,
    criar,
    atualizar,
    excluir
};