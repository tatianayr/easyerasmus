const pool = require("../config/database");
const bcrypt = require("bcrypt");

function dbUserToUser(dbUser) {
    let user = new User();
    user.id = dbUser.est_id;
    user.nome = dbUser.est_nome;
    user.mail = dbUser.est_mail;
    user.pass = dbUser.est_pass;
    user.uni = dbUser.est_uni;
    return user;
}

class User {
    constructor(id, nome, pass, uni, mail, token) {
        this.id = id;
        this.nome = nome;
        this.pass = pass;
        this.uni = uni;
        this.token=token;
        this.mail=mail;
    }

    static async getById(id){
        let dbResult=await pool.query("Select*from estudante where est_id=$1", [id]);
        let dbUsers= dbResult.rows;
        if(!dbUsers.length)
            return { status: 404, result:{msg: "No user found for that id."} } ;
        let dbUser= dbUsers[0];
        return {status: 200, result:
            new User(dbUser.est_id, dbUser.est_nome, dbUser.est_mail, dbUser.est_pass, dbUser.est_uni)};
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
                `INSERT INTO estudante (est_nome, est_mail, est_pass, est_uni)
                     VALUES ($1, $2, $3, $4)`,
                [user.nome, user.mail, hashedPassword, user.uni]
            );

            return { status: 200, result: { msg: "Registered! You can now log in." } };
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async checkLogin(user) {
        try {
            console.log("Checking login for email:", user.mail);
    
            const loginQuery = "SELECT * FROM estudante WHERE est_mail = $1";
            const dbResult = await pool.query(loginQuery, [user.mail]);
    
            console.log("DB Result:", dbResult);
    
            if (dbResult.rows.length === 0) {
                console.log("Email not found");
                return { status: 401, result: { msg: "Email not found" } };
            }
    
            const dbUser = dbResult.rows[0];
            const isPassValid = await bcrypt.compare(user.pass, dbUser.est_pass);
    
            if (!isPassValid) {
                console.log("Incorrect password");
                return { status: 401, result: { msg: "Incorrect password" } };
            }
    
            const authenticatedUser = dbUserToUser(dbUser);
    
            console.log("Login successful:", authenticatedUser);
    
            return { status: 200, result: authenticatedUser };
        } catch (err) {
            console.log("Error during login check:", err);
            return { status: 500, result: err };
        }
    }
    
    async login(){
        
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

    async listarCursoStu(estId) {
        const query = 'SELECT curso_nome, est_nome, est_uni FROM requisitos JOIN curso ON requisitos.curso_id = curso.curso_id JOIN administrador ON curso.admin_id = administrador.admin_id JOIN estudante ON administrador.admin_uni = estudante.est_uni WHERE estudante.est_id = $1'
        try {
            const result = await pool.query(query, [estId]);
            const cursos = result.rows.map(row => row.curso_nome);
            return cursos;
        } catch (error) {
            console.error('Erro ao listar cursos para os alunos:', error);
            throw error;
        }
    }

    
    static async saveToken(user) {
        try {
            console.log("Saving token for user:", user.id);
            console.log("Token to be saved:", user.token);
    
            let dbResult = await pool.query(`Update estudante set est_token=$1 where est_id = $2`, [user.token, user.id]);
    
            console.log("Token saved for user:", user.id);
            return { status: 200, result: { msg: "Token saved!" } };
        } catch (err) {
            console.log("Error saving token:", err);
            return { status: 500, result: err };
        }
    }

    async listarOpcoes(estId) {
        const query = 'SELECT r.req_media, p.prog_uni, p.prog_tipo, p.prog_pais, p.prog_cid, o.of_vaga, o.of_curso FROM estudante e JOIN curso c ON e.curso_id = c.curso_id JOIN requisitos r ON c.curso_id = r.curso_id JOIN oferta o ON r.of_id = o.of_id JOIN programa p ON o.prog_id = p.prog_id WHERE e.est_id = $1'
        try {
            const result = await pool.query(query, [estId]);
            const opcoes = result.rows;
            return opcoes;
        } catch (error) {
            console.error('Erro ao listar opções para os alunos:', error);
            throw error;
        }
    }
    
    }




module.exports = User;
