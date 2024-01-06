const pool = require("../config/database");

class Programa {
    constructor(tipo, uni, pais, cid, adminId) {
        this.tipo = tipo;
        this.uni = uni;
        this.pais = pais;
        this.cid = cid;
        this.adminId = adminId;
        this.progId = null;
        this.ofertaId = null;
        this.cursoId = null;
    }
    async upload() {
        const insertProgramQuery = "INSERT INTO programa (prog_tipo, prog_uni, prog_pais, prog_cid, curso_id) VALUES ($1, $2, $3, $4, $5) RETURNING prog_id";
        const programValues = [this.tipo, this.uni, this.pais, this.cid, this.cursoId];

        try {
            const result = await pool.query(insertProgramQuery, programValues);

            this.progId = result.rows[0].prog_id;

            console.log("Programa adicionado com sucesso. progId:", this.progId);
            return "Programa adicionado com sucesso";
        } catch (error) {
            console.log("Erro ao inserir na base de dados:", error);
            throw error;
        }
    }

    async adicionarOferta(of_curso, of_vaga) {
        if (!this.progId) {
            throw new Error("ID do programa não disponível. Execute o método 'upload' primeiro.");
        }

        const insertOfertaQuery = "INSERT INTO oferta (of_curso, of_vaga, prog_id) VALUES ($1, $2, $3) RETURNING of_id";
        const ofertaValues = [of_curso, of_vaga, this.progId];

        try {
            const result = await pool.query(insertOfertaQuery, ofertaValues);
            const ofId = result.rows[0].of_id;

            console.log("Oferta adicionada com sucesso. ID da oferta:", ofId);
            return ofId;
        } catch (error) {
            console.log("Erro ao inserir oferta na base de dados:", error);
            throw error;
        }
    }

    async adicionarRequisitos(curso_id, req_media) {
        if (!this.ofertaId) {
            throw new Error("ID do programa não disponível. Execute o método 'upload' primeiro.");
        }

        const insertRequisitosQuery = "INSERT INTO requisitos (req_media, of_id, curso_id) VALUES ($1, $2, $3)";
        const requisitosValues = [req_media, this.ofertaId, curso_id];

        try {
            await pool.query(insertRequisitosQuery, requisitosValues);
            console.log("Requisitos adicionados com sucesso");
            return "Requisitos adicionados com sucesso";
        } catch (error) {
            console.log("Erro ao inserir requisitos na base de dados:", error);
            throw error;
        }
    }

    async listarProgramas() {
        const listarProgramasQuery = `
        SELECT
            programa.prog_id as progId,
            programa.prog_tipo as progTipo,
            programa.prog_uni as progUni,
            programa.prog_pais as progPais,
            programa.prog_cid as progCid,
            oferta.of_id as ofId,
            oferta.of_curso as ofCurso,
            oferta.of_vaga as ofVaga,
            requisitos.req_id as reqId,
            requisitos.req_curso as reqCurso,
            requisitos.req_media as reqMedia
        FROM
            programa
        JOIN oferta ON programa.prog_id = oferta.prog_id
        JOIN requisitos ON oferta.of_id = requisitos.of_id;
    `;

        try {
            const result = await pool.query(listarProgramasQuery);
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar programas:', error);
            throw error;
        }
    }
}
module.exports = Programa;
