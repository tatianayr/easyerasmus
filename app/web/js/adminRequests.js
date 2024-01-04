async function requestRegister(email, adminuni, password) {
    try {
        const response = await fetch(`/api/admin/register`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                adminmail: email,
                adminuni: adminuni,
                password: password
            })
        });

        return { successful: response.status == 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

async function requestLogin(mail, pass) {
    try {
        const response = await fetch(`/api/admin/auth`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                adminmail: mail,
                password: pass
            })
        });

        return { successful: response.status == 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

async function requestLogout() {
    try {
        const response = await fetch('/api/users/auth',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            });
        return { successful: response.status == 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}
