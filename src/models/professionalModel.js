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

async function atualizar(id, profissional) {
    const { nome, especialidade, telefone, ativo } = profissional;

    const [resultado] = await db.query(
        `UPDATE profissionais
         SET nome = ?, especialidade = ?, telefone = ?, ativo = ?
         WHERE id = ?`,
        [nome, especialidade, telefone, ativo, id]
    );

    return resultado.affectedRows;
}

async function excluir(id) {
    const [resultado] = await db.query(
        "DELETE FROM profissionais WHERE id = ?",
        [id]
    );

    return resultado.affectedRows;
}


module.exports = {
    listar, 
    criar,
    atualizar,
    excluir
};