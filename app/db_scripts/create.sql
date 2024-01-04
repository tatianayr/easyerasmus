create table administrador (
    admin_id SERIAL,
    admin_mail VARCHAR(70) NOT NULL,
    admin_uni VARCHAR(70) NOT NULL,
    admin_pass VARCHAR(200) NOT NULL, 
    admin_token VARCHAR(200),
    primary key (admin_id));

create table estudante (
    est_id SERIAL,
    est_nome VARCHAR(70) NOT NULL,
    est_mail VARCHAR(70) NOT NULL,
    est_pass VARCHAR(200) NOT NULL, 
    est_uni VARCHAR(70) NOT NULL,
    est_curso VARCHAR(70) NOT NULL,
    est_token VARCHAR(200),
    primary key (est_id));

create table chatbot (
    chat_id SERIAL,
    chat_nome VARCHAR(70) NOT NULL,
    chat_resp VARCHAR(600) NOT NULL,
    chat_greet VARCHAR(200) NOT NULL, 
    primary key (chat_id));

CREATE TABLE programa (
    prog_id SERIAL PRIMARY KEY,
    prog_tipo VARCHAR(70) NOT NULL,
    prog_uni VARCHAR(30) NOT NULL,
    prog_pais VARCHAR(30) NOT NULL UNIQUE,
    prog_cid VARCHAR(30) NOT NULL UNIQUE,
    admin_id INTEGER REFERENCES administrador(admin_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE oferta (
    of_id SERIAL PRIMARY KEY,
    of_curso VARCHAR(30) NOT NULL,
    of_vaga VARCHAR(30) NOT NULL,
    prog_id INTEGER REFERENCES programa(prog_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE requisitos (
    req_id SERIAL PRIMARY KEY,
    req_curso VARCHAR(30) NOT NULL,
    req_media INTEGER NOT NULL,
    of_id INTEGER REFERENCES oferta(of_id) ON DELETE CASCADE ON UPDATE CASCADE
);



