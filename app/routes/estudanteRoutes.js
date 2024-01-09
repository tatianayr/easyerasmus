const express = require('express');
const router = express.Router();
const User = require("../models/estudanteModel");
const utils = require("../config/utils");
const auth = require("../middleware/auth");
const tokenSize = 64;
const bcrypt = require("bcrypt");
const pool = require("../config/database");

router.use(express.json());



router.post('/auth', async function (req, res) {
    try {
        console.log("Login user ");
        let user = new User();
        user.mail = req.body.est_mail;
        user.pass = req.body.est_pass;

        const token = utils.genToken(tokenSize);
        console.log("Generated token:", token);

        req.session.token = token;
        // Dentro da rota de autenticação
        let result = await User.checkLogin(user);

console.log("Result from checkLogin:", result);

if (result.status != 200) {
    res.status(result.status).send(result.result);
    return;
}


        const estId = result.result.id;
        user = result.result;
        user.token = token;
        result = await User.saveToken(user);
        console.log(user);

        res.status(200).send({ msg: "Successful Login!", estId: estId });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/auth', auth.verifyAuth, async function (req, res, next) {
    try {
        console.log("Get authenticated user");
        if (!req.user || !req.user.id) {
            return res.status(400).send({ msg: 'User not properly authenticated' });
        }

        let result = await User.getById(req.user.id);

        if (result.status !== 200) {
            return res.status(result.status).send(result.result);
        }

        let user = new User();
        user.id = req.user.id;
        user.nome = req.user.nome;
        user.uni = req.user.uni;

        res.status(result.status).send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


router.post('/register', async function (req, res) {
    try {
        const user = {
            nome: req.body.nome,
            mail: req.body.mail,
            pass: req.body.pass,
            uni: req.body.uni
        };

        console.log('Received registration request:', user);

        const result = await User.register(user);

        console.log('Registration result:', result);

        res.status(result.status).send(result.result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/auth', async function (req, res) {
    try {
        console.log("Login user");
        let user = new User();
        user.mail = req.body.mail;
        user.pass = req.body.pass;
        let result = await User.checkLogin(user);
        if (result.status !== 200) {
            res.status(result.status).send(result.result);
            return;
        }
        const authenticatedUser = result.result;
        res.status(200).send({ msg: "Successful Login!", user: authenticatedUser });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.get('/listar-universidades', async function (req, res) {
    try {
        const userInstance = new User();
        const universidades = await userInstance.listarUniversidades();
        res.status(200).json({ universidades });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao listar universidades." });
    }
});

router.get('/listar-cursostu/:estId', async function (req, res) {
    console.log('Rota /listar-cursostu/:estId alcançada.');
    try {
        
    
        const estId = req.params.estId; 
        console.log('estId:', estId);

        const userInstance = new User();
        const cursos = await userInstance.listarCursoStu(estId);

        console.log('Cursos:', cursos);
        res.status(200).json({ cursos });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao listar cursos do aluno." });
    }
});

router.get('/listar-opcoes/:cursoNome', async function (req, res) {
    try {
        const cursoNome = req.params.cursoNome; // Corrected to use req.params
        const userInstance = new User();
        const opcoes = await userInstance.listarOpcoes(cursoNome);
        res.status(200).json({ opcoes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao listar cursos do aluno." });
    }
});







module.exports = router;