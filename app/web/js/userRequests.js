async function requestRegister(nome, mail, pass, uni) {
    try {
        console.log('Requesting registration for:', nome, mail, pass, uni);
        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                mail: mail,
                pass: pass,
                uni: uni
            })
        });

        console.log('Registration response:', response);

        return { successful: response.status === 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}
async function requestLogin(user) {
    const est_mail = document.getElementById("est_mail").value;
    const est_pass = document.getElementById("est_pass").value;

    try {
        console.log('Requesting login for:', user);
        const response = await fetch('/api/user/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                est_mail,
                est_pass
            })
        });

        console.log('Login response:', response);

        if (response.ok) {
            const data = await response.json();
            return { status: response.status, data };
        } else {
            return { status: response.status, data: null };
        }
    } catch (err) {
        console.log(err);
        return { status: 500, data: null };
    }
}




async function register() {
    let msgDOM = document.getElementById('msg');

    try {
        let nome = document.getElementById('nome').value;
        let mail = document.getElementById('mail').value;
        let pass = document.getElementById('pass').value;
        let uni = document.getElementById('uni').value;

        if (nome && mail && pass && uni) {
            let res = await requestRegister(nome, mail, pass, uni);

            if (res.successful) {
                msgDOM.textContent = 'Account created. Go to login page';
                window.location.href = 'login-stu.html';
            } else {
                msgDOM.textContent = 'Was not able to register';
            }
        } else {
            msgDOM.textContent = 'Please fill in all required fields.';
        }
    } catch (err) {
        console.log(err);
        msgDOM.textContent = 'An error occurred';
    }
}
async function login() {
    let msgDOM = document.getElementById('msg');

    try {
        let mail = document.getElementById('est_mail').value;
        let pass = document.getElementById('est_pass').value;

        if (mail && pass) {
            let user = {
                mail: mail,
                pass: pass
            };

            let res = await requestLogin(user);

            if (res.status === 200) {
                msgDOM.textContent = 'Successful Login!';
                const estId = res.data.estId || '';
                window.location.href = `cursos-stu.html?estId=${estId}`;
            } else {
                msgDOM.textContent = 'Login failed. Check your credentials.';
            }
        } else {
            msgDOM.textContent = 'Please fill in all required fields.';
        }
    } catch (err) {
        console.log(err);
        msgDOM.textContent = 'An error occurred';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', function (e) {
        e.preventDefault();
        register();
    });
});

async function listarUniversidades() {
    try {
        const response = await fetch('/listar-universidades');
        const data = await response.json();
        return data.universidades;
    } catch (error) {
        console.error('Erro ao obter universidades:', error);
        throw error;
    }
}



async function listarCursoStu() {
    try {
        const response = await fetch(`/api/user/listar-cursostu/${estId}`);
        const data = await response.json();
        return data.cursos;
    } catch (error) {
        console.error('Erro ao obter cursos do aluno:', error);
        throw error;
    }
}

async function listarOpcoes(cursoNome) {
    try {
        const response = await fetch(`/api/user/listar-opcoes/${cursoNome}`);
        const data = await response.json();
        return data.opcoes;
    } catch (error) {
        console.error('Erro ao obter opcoes do aluno:', error);
        throw error;
    }
}

async function preencherDropdownUniversidades() {
    let uniDropdown = document.getElementById('uni');
    try {
        const response = await fetch('/api/user/listar-universidades');
        const data = await response.json();
        const universidades = data.universidades;

        uniDropdown.innerHTML = "";

        for (let i = 0; i < universidades.length; i++) {
            let option = document.createElement("option");
            option.value = universidades[i];
            option.text = universidades[i];
            uniDropdown.add(option);
        }
    } catch (error) {
        console.error('Erro ao preencher dropdown de universidades:', error);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await preencherDropdownUniversidades();
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', async function (e) {
        e.preventDefault();
        await register();
    });
});

