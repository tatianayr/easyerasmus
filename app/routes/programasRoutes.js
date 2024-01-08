const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Programa = require("../models/programasModel");
const Curso = require("../models/programasModel");
const pool = require("../config/database");

router.use(express.json());

router.post('/upload/:cursoId', auth.verifyAuth, async function (req, res) {
    try {
        const cursoId = req.params.cursoId;
        const { prog_tipo, prog_uni, prog_pais, prog_cid } = req.body;
        console.log("Dados do programa:", prog_tipo, prog_uni, prog_pais, prog_cid);

        const novoPrograma = new Programa(prog_tipo, prog_uni, prog_pais, prog_cid, cursoId);
        console.log("novoPrograma:", novoPrograma);
        const message = await novoPrograma.upload();

        res.status(201).json({ message, progId: novoPrograma.progId });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao fazer upload do programa." });
    }
});

router.post('/adicionar-oferta/:progId', auth.verifyAuth, async function (req, res) {
    try {
        const adminId = req.body.adminId;
        const progId = req.params.progId;
        const { of_curso, of_vaga } = req.body;
        if (!progId) {
            return res.status(400).json({ error: "ID do programa inválido." });
        }
        const programaExistente = await buscarProgramaPorId(progId);

        if (!programaExistente) {
            return res.status(404).json({ error: "Programa não encontrado." });
        }

        const programa = new Programa(null, null, null, null, adminId);
        programa.progId = progId;

        const ofId = await programa.adicionarOferta(of_curso, of_vaga);

        res.status(201).json({ message: "Oferta adicionada com sucesso", ofId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao adicionar oferta ao programa." });
    }
});

router.post('/adicionar-requisitos/:ofertaId', auth.verifyAuth, async function (req, res) {
    try {
        const adminId = req.admin.id;
        const ofertaId = req.params.ofertaId;
        const { curso_id, req_media } = req.body;

        console.log("Dados a serem recebidos:", { ofertaId, curso_id, req_media });

        const ofertaExistente = await buscarOfertaPorId(ofertaId);
     

        if (!ofertaExistente) {
            return res.status(404).json({ error: "Oferta não encontrada." });
        }

        // curso_id já é o ID do curso, então não é necessário buscar por nome
        const cursoId = await buscarCursoIdPorId(curso_id);

        const programa = new Programa(null, null, null, null, null, adminId);
        programa.ofertaId = ofertaId;
        const message = await programa.adicionarRequisitos(cursoId, req_media);

        res.status(201).json({ message });
    } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro ao adicionar requisitos à oferta." });
    }
});
async function buscarCursoIdPorId(cursoId) {
    const query = 'SELECT curso_id FROM curso WHERE curso_id = $1';
    const values = [cursoId];

    try {
        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0].curso_id;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar curso por ID:', error);
        throw error;
    }
}


async function buscarOfertaPorId(ofertaId) {
    const query = 'SELECT * FROM oferta WHERE of_id = $1';
    const values = [ofertaId];

    try {
        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar oferta por ID:', error);
        throw error;
    }
}


async function buscarCursoIdPorNome(cursoNome) {
    const query = 'SELECT curso_id FROM curso WHERE curso_nome = $1';
    const values = [cursoNome];

    try {
        const result = await pool.query(query, values);
        console.log("Resultado da consulta para", cursoNome, ":", result.rows);

        if (result.rows.length > 0) {
            return result.rows[0].curso_id;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar curso por nome:', error);
        throw error;
    }
}








router.get('/listar-programas', async (req, res) => {
    try {
        const programas = await listarProgramas();
        res.json({ universidades: programas });
    } catch (error) {
        console.error('Erro ao obter programas:', error);
        res.status(500).json({ error: 'Erro ao obter programas' });
    }
});

async function buscarOfertaPorId(ofertaId) {

    const selectOfertaQuery = "SELECT * FROM oferta WHERE of_id = $1";
    const result = await pool.query(selectOfertaQuery, [ofertaId]);


    return result.rows[0];

}




async function listarProgramas() {
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

async function buscarProgramaPorId(programId) {
    const selectProgramQuery = "SELECT * FROM programa WHERE prog_id = $1";
    const result = await pool.query(selectProgramQuery, [programId]);
    return result.rows[0];
}

module.exports = router;
