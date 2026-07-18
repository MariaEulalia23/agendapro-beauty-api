const db = require("../config/database");

async function listar() {
    const [rows] = await db.query("SELECT * FROM profissionais");
    return rows;
}


async function criar(profissional) {
    const { nome, especialidade, telefone, ativo } = profissional;

    const [resultado] = await db.query(
        `INSERT INTO profissionais
        (nome, especialidade, telefone, ativo)
        VALUES (?, ?, ?, ?)`,
        [nome, especialidade, telefone, ativo]
    );

    return resultado.insertId;
}


module.exports = {
    listar, 
    criar
};