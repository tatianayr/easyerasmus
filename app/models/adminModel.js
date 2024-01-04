
const pool = require("../config/database");
const auth = require("../config/utils");
const bcrypt = require("bcrypt");

function dbAdminToAdmin(dbAdmin) {
    let admin = new Admin();
    admin.id = dbAdmin.admin_id;
    admin.mail = dbAdmin.admin_mail;
    admin.uni = dbAdmin.admin_uni;
    admin.pass = dbAdmin.admin_pass;
    return admin;
}

class Admin {
    constructor(id, mail, uni, pass, token) {
        this.id = id;
        this.mail = mail;
        this.uni = uni;
        this.pass = pass;
        this.token=token;
    }
    export() {
        let admin = new Admin();
        admin.id = this.id;
        return admin;
    }

    static async getById(id) {
        try {
            let dbResult = await pool.query("Select * from administrador where admin_id=$1", [id]);
            let dbAdmins = dbResult.rows;
            if (!dbAdmins.length) 
                return { status: 404, result:{msg: "No user found for that id."} } ;
            let dbAdmin = dbAdmins[0];
            return { status: 200, result:   
                new Admin(dbAdmin.admin_id,dbAdmin.admin_mail,dbAdmin.admin_pass, dbAdmin.admin_uni, dbAdmin.admin_token)} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }  
    }

    static async getUserByToken(token) {
        try {
            let dbResult =
                await pool.query(`Select * from administrador where admin_token = $1`,[token]);
            let dbAdmins = dbResult.rows;
            if (!dbAdmins.length)
                return { status: 403, result: {msg:"Invalid authentication!"}} ;
            let admin = dbAdminToAdmin(dbAdmins[0]);
            return { status: 200, result: admin} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async register(admin) {
        try {
            const emailExistsQuery = "SELECT admin_id FROM administrador WHERE admin_mail = $1";
            const emailExistsResult = await pool.query(emailExistsQuery, [admin.mail]);

            if (emailExistsResult.rows.length > 0) {
                return {
                    status: 400,
                    result: "Email already exists"
                };
            }

            const hashedPassword = await bcrypt.hash(admin.pass, 10);

            const insertQuery = "INSERT INTO administrador (admin_mail, admin_uni, admin_pass) VALUES ($1, $2, $3)";
            await pool.query(insertQuery, [admin.mail, admin.uni, hashedPassword]);

            return {
                status: 200,
                result: "Registered! You can now log in."
            };
        } catch (err) {
            console.error(err);
            return {
                status: 500,
                result: err.message || "An error occurred during registration"
            };
        }
    }

    static async checkLogin(admin) {
        try {
            const loginQuery = "SELECT * FROM administrador WHERE admin_mail = $1";
            const dbResult = await pool.query(loginQuery, [admin.mail]);
    
            if (dbResult.rows.length === 0) {
                console.log("Admin login failed: No user found.");
                return { status: 401, result: { msg: "Wrong username or password!" } };
            }
    
            const dbAdmin = dbResult.rows[0];
    
            const isPassValid = await bcrypt.compare(admin.pass, dbAdmin.admin_pass);
    
            if (!isPassValid) {
                console.log("Admin login failed: Invalid password.");
                return { status: 401, result: { msg: "Wrong username or password!" } };
            }
    
            const authenticatedAdmin = dbAdminToAdmin(dbAdmin);
    
            return { status: 200, result: authenticatedAdmin };
        } catch (err) {
            console.log("Admin login failed:", err);
            return { status: 500, result: err };
        }
    }
    
    static async saveToken(admin) {
        try {
            let dbResult =
                await pool.query(`Update administrador set admin_token=$1 where admin_id = $2`,
                [admin.token, admin.id]);
            console.log("Token saved for admin:", admin.id);
            return { status: 200, result: { msg: "Token saved!" } };
        } catch (err) {
            console.log("Error saving token:", err);
            return { status: 500, result: err };
        }
    }
    
}
module.exports = Admin;