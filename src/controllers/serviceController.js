const serviceService = require("../services/serviceService");

async function listar(req, res) {

    try {

        const servicos = await serviceService.listarServicos();

        res.json(servicos);

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        });

    }

}

async function criar(req, res) {

    try {

        const id = await serviceService.criarServico(req.body);

        res.status(201).json({
            mensagem: "Serviço cadastrado com sucesso!",
            id
        });

    } catch (erro) {

        res.status(erro.statusCode || 500).json({
            erro: erro.message
        });

    }

}
async function atualizar(req, res) {
    try {
        const id = req.params.id;

        await serviceService.atualizarServico(id, req.body);

        res.json({
            mensagem: "Serviço atualizado com sucesso!"
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

        await serviceService.excluirServico(id);

        res.json({
            mensagem: "Serviço excluído com sucesso!"
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