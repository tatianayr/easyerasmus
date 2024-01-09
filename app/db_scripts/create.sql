CREATE TABLE administrador (
    admin_id SERIAL PRIMARY KEY,
    admin_mail VARCHAR(70) NOT NULL,
    admin_uni VARCHAR(70) NOT NULL,
    admin_pass VARCHAR(200) NOT NULL, 
    admin_token VARCHAR(200)
);

CREATE TABLE curso (
    curso_id SERIAL PRIMARY KEY,
    curso_nome VARCHAR(70) NOT NULL,
    admin_id INTEGER REFERENCES administrador(admin_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE estudante (
    est_id SERIAL PRIMARY KEY,
    est_nome VARCHAR(70) NOT NULL,
    est_mail VARCHAR(70) NOT NULL,   
    est_pass VARCHAR(200) NOT NULL, 
    est_uni VARCHAR(70) NOT NULL,
    est_curso VARCHAR(70),
    est_token VARCHAR(200),
    curso_id INTEGER REFERENCES curso(curso_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE programa (
    prog_id SERIAL PRIMARY KEY,
    prog_tipo VARCHAR(70) NOT NULL,
    prog_uni VARCHAR(30) NOT NULL,
    prog_pais VARCHAR(30) NOT NULL UNIQUE,
    prog_cid VARCHAR(30) NOT NULL UNIQUE,
    curso_id INTEGER REFERENCES curso(curso_id) ON DELETE CASCADE ON UPDATE CASCADE,
        admin_id INTEGER REFERENCES administrador(admin_id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE oferta (
    of_id SERIAL PRIMARY KEY,
    of_curso VARCHAR(30) NOT NULL,
    of_vaga VARCHAR(30) NOT NULL,
    prog_id INTEGER REFERENCES programa(prog_id) ON DELETE CASCADE ON UPDATE CASCADE,
        admin_id INTEGER REFERENCES administrador(admin_id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE requisitos (
    req_id SERIAL PRIMARY KEY,
    req_media INTEGER NOT NULL,
    of_id INTEGER REFERENCES oferta(of_id) ON DELETE CASCADE ON UPDATE CASCADE,
    curso_id INTEGER REFERENCES curso(curso_id) ON DELETE CASCADE ON UPDATE CASCADE,
        admin_id INTEGER REFERENCES administrador(admin_id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE chatbot (
    chat_id SERIAL PRIMARY KEY,
    chat_nome VARCHAR(70) NOT NULL,
    chat_resp VARCHAR(600) NOT NULL,
    chat_greet VARCHAR(200) NOT NULL
);
