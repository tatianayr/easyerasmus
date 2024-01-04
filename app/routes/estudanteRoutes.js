const express = require('express');
const router = express.Router();
const User = require("../models/estudanteModel");
const utils = require("../config/utils");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const pool = require("../config/database");

router.use(express.json());

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
        user.curso = req.user.curso;

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
            uni: req.body.uni,
            curso: req.body.curso
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

module.exports = router;