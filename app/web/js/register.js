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
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            method: "POST",
            body: JSON.stringify({
                adminmail: mail,
                password: pass
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Data from server:", data); 
            return { successful: true, adminId: data.adminId };
        } else {
            return { successful: false, err: "Authentication failed" };
        }

    } catch (err) {
        console.log(err);
        return { successful: false, err: err };
    }
}



async function register() {
    let msgDOM = document.getElementById("msg");
    msgDOM.textContent = "";

    try {
        let adminmail = document.getElementById("adminmail").value;
        let universidade = document.getElementById("universidade").value;
        let password = document.getElementById("password").value;
        let res = await requestRegister(adminmail, universidade, password);

        if (res.successful) {
            msgDOM.textContent = "Account created. Go to login page";
            window.location.href = "login-uni.html";
        } else {
            msgDOM.textContent = "Was not able to register";
        }
    } catch (err) {
        console.log(err);
        msgDOM.textContent = "An error occurred";
    }
}

async function login() {
    let msgDOM = document.getElementById("msg");
    msgDOM.textContent = "";

    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let res = await requestLogin(email, password);

        if (res.successful) {
            console.log("AdminId:", res.adminId); 
            localStorage.setItem('adminId', res.adminId || '');
            msgDOM.textContent = "Login successful. Redirecting...";
            const adminId = res.adminId || '';
            window.location.href = `cursos.html?adminId=${adminId}`;
        } else {
            msgDOM.textContent = "Login failed. Please check your email and password.";
        }
        
    } catch (err) {
        console.log(err);
        msgDOM.textContent = "An error occurred during login";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectButton');

    connectButton.addEventListener('click', function (e) {
        e.preventDefault();
        register();
    });
});