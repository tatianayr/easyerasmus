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
    async resultado(adminId) {
        const query = `
            SELECT
                a.admin_id,
                a.admin_mail,
                a.admin_uni,
                c.curso_id,
                c.curso_nome,
                p.prog_id,
                p.prog_tipo,
                p.prog_uni,
                p.prog_pais,
                p.prog_cid,
                o.of_id,
                o.of_curso,
                o.of_vaga,
                r.req_id,
                r.req_media
            FROM
                administrador a
            LEFT JOIN curso c ON a.admin_id = c.admin_id
            LEFT JOIN programa p ON c.curso_id = p.curso_id
            LEFT JOIN oferta o ON p.prog_id = o.prog_id
            LEFT JOIN requisitos r ON o.of_id = r.of_id
            WHERE
                a.admin_id = $1;
        `;
        const values = [adminId];

        try {
            const result = await pool.query(query, values);
            return result.rows;
        } catch (error) {
            console.error('Erro ao executar a consulta:', error);
            throw error;
        }
    }




    async upload(prog_tipo, prog_uni, prog_pais, prog_cid) {
        const insertProgramQuery = "INSERT INTO programa (prog_tipo, prog_uni, prog_pais, prog_cid, curso_id, admin_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING prog_id";
        const programValues = [prog_tipo, prog_uni, prog_pais, prog_cid, this.cursoId, this.adminId];

        try {
            console.log("Valores a serem inseridos:", programValues);

            const result = await pool.query(insertProgramQuery, programValues);

            const progId = result.rows[0].prog_id;

            console.log("Programa adicionado com sucesso. progId:", progId);
            return progId;
        } catch (error) {
            console.log("Erro ao inserir na base de dados:", error);
            throw error;
        }
    }

    async adicionarOferta(of_curso, of_vaga) {
        if (!this.progId) {
            throw new Error("ID do programa não disponível. Execute o método 'upload' primeiro.");
        }

        const insertOfertaQuery = "INSERT INTO oferta (of_curso, of_vaga, prog_id, admin_id) VALUES ($1, $2, $3, $4) RETURNING of_id";
        const ofertaValues = [of_curso, of_vaga, this.progId, this.adminId];

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

    async adicionarRequisitos(cursoId, req_media) {
        const query = `
            INSERT INTO requisitos (req_media, of_id, curso_id)
            VALUES ($1, $2, $3)
        `;
        const values = [req_media, this.ofertaId, cursoId];

        try {
            const result = await pool.query(query, values);
            return "Requisitos adicionados com sucesso.";
        } catch (error) {
            console.error('Erro ao inserir requisitos na base de dados:', error);
            throw error;
        }
    }

    async updateResultado(adminId, novosDados) {
        const client = await pool.connect();
    
        try {
            await client.query('BEGIN');
    
            // Atualizar tabela programa
            const updateProgramaQuery = `
                UPDATE programa
                SET
                    prog_tipo = $1,
                    prog_uni = $2,
                    prog_pais = $3,
                    prog_cid = $4
                WHERE
                    programa.prog_id = $5;
            `;
    
            const programaValues = [
                novosDados.prog_tipo,
                novosDados.prog_uni,
                novosDados.prog_pais,
                novosDados.prog_cid,
                novosDados.prog_id
            ];
    
            await client.query(updateProgramaQuery, programaValues);
    
            // Atualizar tabela oferta
            const updateOfertaQuery = `
                UPDATE oferta
                SET
                    of_curso = $1,
                    of_vaga = $2
                WHERE
                    oferta.of_id = $3;
            `;
    
            const ofertaValues = [
                novosDados.of_curso,
                novosDados.of_vaga,
                novosDados.of_id
            ];
    
            await client.query(updateOfertaQuery, ofertaValues);
    
            // Atualizar tabela requisitos
            const updateRequisitosQuery = `
                UPDATE requisitos
                SET
                    req_media = $1
                WHERE
                    requisitos.req_id = $2;
            `;
    
            const requisitosValues = [
                novosDados.req_media,
                novosDados.req_id
            ];
    
            await client.query(updateRequisitosQuery, requisitosValues);
    
            await client.query('COMMIT');
            console.log("Dados atualizados com sucesso.");
            return "Dados atualizados com sucesso.";
        } catch (error) {
            await client.query('ROLLBACK');
            console.error('Erro ao executar a atualização:', error);
            throw error;
        } finally {
            client.release();
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
