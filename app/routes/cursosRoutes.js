const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const Curso = require("../models/cursoModel");

router.post('/adicionar', auth.verifyAuth, async (req, res) => {
    try {
        const { curso_nome } = req.body;
        const adminId = req.admin.id;
        const novoCurso = new Curso(adminId);
        const curso = await novoCurso.adicionarCurso(curso_nome);

        res.status(201).json({ cursoId: curso.id, message: 'Curso adicionado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Erro ao adicionar curso: ${error.message}` });
    }
});



router.get('/listar', auth.verifyAuth, async (req, res) => {
    try {
        const adminId = req.admin.id;
        const cursoModel = new Curso(adminId);
        const cursos = await cursoModel.listarCursos();

        // Mapear os cursos para um formato mais adequado para a resposta JSON
        const cursosFormatados = cursos.map(curso => ({
            curso_id: curso.curso_id,
            curso_nome: curso.curso_nome
        }));

        res.status(200).json({ cursos: cursosFormatados });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Erro ao listar cursos: ${error.message}` });
    }
});

module.exports = router;