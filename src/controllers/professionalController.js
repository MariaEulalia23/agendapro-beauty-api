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

module.exports = {
    listar,
    criar
};