const pool = require("../config/database");
const bcrypt = require("bcrypt");

class Curso {
    constructor(adminId, id, nome) {
        this.adminId = adminId;
        this.id = id;
        this.nome = nome;
    }

    async adicionarCurso(curso_nome) {
        if (!this.adminId) {
            throw new Error("ID do admin não disponível. Execute o método 'login' primeiro.");
        }

        const insertCursosQuery = "INSERT INTO curso (curso_nome, admin_id) VALUES ($1, $2) RETURNING curso_id";
        const cursosValues = [curso_nome, this.adminId];

        try {
            const result = await pool.query(insertCursosQuery, cursosValues);
            const cursoId = result.rows[0].curso_id;
            console.log("Cursos adicionados com sucesso");
            return { id: cursoId };
        } catch (error) {
            console.error("Erro ao inserir cursos na base de dados:", error);
            throw error;
        }
    }

    async listarCursos() {
        const listarCursosQuery = "SELECT * FROM curso";

        try {
            const result = await pool.query(listarCursosQuery);
            return result.rows;
        } catch (error) {
            console.error("Erro ao obter cursos da base de dados:", error);
            throw error;
        }
    }
}
module.exports = Curso;
