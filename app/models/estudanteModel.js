const pool = require("../config/database");
const bcrypt = require("bcrypt");

function dbUserToUser(dbUser) {
    let user = new User();
    user.id = dbUser.est_id;
    user.nome = dbUser.est_nome;
    user.mail = dbUser.est_mail;
    user.pass = dbUser.est_pass;
    user.uni = dbUser.est_uni;
    user.curso = dbUser.est_curso;
    return user;
}

class User {
    constructor(id, nome, pass, uni, curso, token) {
        this.id = id;
        this.nome = nome;
        this.pass = pass;
        this.uni = uni;
        this.curso = curso;
        this.token=token;
    }

    static async getById(id){
        let dbResult=await pool.query("Select*from estudante where est_id=$1", [id]);
        let dbUsers= dbResult.rows;
        if(!dbUsers.length)
            return { status: 404, result:{msg: "No user found for that id."} } ;
        let dbUser= dbUsers[0];
        return {status: 200, result:
            new User(dbUser.est_id, dbUser.est_nome, dbUser.est_mail, dbUser.est_pass, dbUser.est_uni, dbUser.est_curso)};
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }   

    static async register(user) {
        try {
            let dbResult = await pool.query("SELECT * FROM estudante WHERE est_mail = $1", [user.mail]);
            let dbUsers = dbResult.rows;
            if (dbUsers.length) {
                return {
                    status: 400,
                    result: [{
                        location: "body",
                        param: "mail",
                        msg: "That email already exists"
                    }]
                };
            }
          

            const hashedPassword = await bcrypt.hash(user.pass, 10);
            
            dbResult = await pool.query(
                `INSERT INTO estudante (est_nome, est_mail, est_pass, est_uni, est_curso)
                     VALUES ($1, $2, $3, $4, $5)`,
                [user.nome, user.mail, hashedPassword, user.uni, user.curso]
            );

            return { status: 200, result: { msg: "Registered! You can now log in." } };
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async checkLogin(user) {
        try {
            const loginQuery = "SELECT * FROM estudante WHERE est_mail = $1";
            const dbResult = await pool.query(loginQuery, [user.mail]);

            if (dbResult.rows.length === 0) {
                return { status: 401, result: { msg: "Email not found" } };
            }

            const dbUser = dbResult.rows[0];

            const isPassValid = await bcrypt.compare(user.pass, dbUser.est_pass);

            if (!isPassValid) {
                return { status: 401, result: { msg: "Incorrect password" } };
            }

            const authenticatedUser = dbUserToUser(dbUser);

            return { status: 200, result: authenticatedUser };
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    async listarUniversidades() {
        const query = 'SELECT DISTINCT admin_uni FROM administrador;';
        try {
            const result = await pool.query(query);
            const universidades = result.rows.map(row => row.admin_uni);
            return universidades;
        } catch (error) {
            console.error('Erro ao listar universidades:', error);
            throw error;
        }
    }
}

module.exports = User;
