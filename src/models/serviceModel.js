const db = require("../config/database");

async function listar() {
    const [rows] = await db.query("SELECT * FROM servicos");
    return rows;
}

async function criar(servico) {
    const { area_id, nome, duracao_min, preco } = servico;

    const [resultado] = await db.query(
        `INSERT INTO servicos
        (area_id, nome, duracao_min, preco)
        VALUES (?, ?, ?, ?)`,
        [area_id, nome, duracao_min, preco]
    );

    return resultado.insertId;
}

async function atualizar(id, servico) {
    const { area_id, nome, duracao_min, preco } = servico;

    const [resultado] = await db.query(
        `UPDATE servicos
         SET area_id = ?, nome = ?, duracao_min = ?, preco = ?
         WHERE id = ?`,
        [area_id, nome, duracao_min, preco, id]
    );

    return resultado.affectedRows;
}

async function excluir(id) {
    const [resultado] = await db.query(
        "DELETE FROM servicos WHERE id = ?",
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