async function enviarPrograma() {
    const prog_tipo = document.getElementById("prog_tipo").value;
    const prog_uni = document.getElementById("prog_uni").value;
    const prog_pais = document.getElementById("prog_pais").value;
    const prog_cid = document.getElementById("prog_cid").value;

    try {
        const response = await fetch("/api/programa/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prog_tipo,
                prog_uni,
                prog_pais,
                prog_cid,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            document.getElementById("contact_form").reset();

            window.location.href = `oferta.html?progId=${data.progId}`;
        } else {
            alert("Erro ao fazer upload do programa.");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}

async function adicionarOfertaAoPrograma(progId, /* outros parâmetros da oferta */) {
    try {
        console.log("Enviando dados para o servidor:", { of_curso, of_vaga });
        const response = await fetch(`/api/programa/adicionar-oferta/${progId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert("Erro ao adicionar oferta ao programa.");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}

async function adicionarRequisitosAoPrograma(ofertaId, req_curso, req_media) {
    try {
        const response = await fetch(`/api/programa/adicionar-requisitos/${ofertaId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                req_curso,
                req_media,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert("Erro ao adicionar requisitos ao programa.");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}

async function adicionarRequisitoAOferta(ofertaId, req_curso, req_media) {
    try {
        const response = await fetch(`/api/programa/adicionar-requisitos/${ofertaId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                req_curso,
                req_media,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        } else {
            alert("Erro ao adicionar requisitos à oferta.");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}