const professionalModel = require("../models/professionalModel");

async function listarProfissionais() {
    return await professionalModel.listar();
}

async function criarProfissional(profissional) {
    return await professionalModel.criar(profissional);
}

module.exports = {
    listarProfissionais,
    criarProfissional
};