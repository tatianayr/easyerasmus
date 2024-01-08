async function obterListaCursos() {
    try {
        const response = await fetch('/api/curso/listar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.cursos;
        } else {
            throw new Error('Erro ao obter lista de cursos.');
        }
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}
window.obterListaCursos = obterListaCursos;
async function obterOfertaId() {
    console.log("Página: requisitos.html - Início da função obterOfertaId");

    const urlParams = new URLSearchParams(window.location.search);
    const ofId = urlParams.get('ofId');

    console.log("Página: requisitos.html - Oferta ID da URL:", ofId);

    if (!ofId) {
        alert("ID da oferta não encontrado na URL.");
        window.location.href = '/error.html';
    } else {
        console.log("Página: requisitos.html - Oferta ID:", ofId);
    }

    return ofId;  
}

async function adicionarRequisitoAOferta() {
    console.log("Página de requisitos - Início da função adicionarRequisitoAOferta");
    const ofertaId = await obterOfertaId();
    console.log("Página de requisitos - Oferta ID: ", ofertaId);
    const req_curso = document.getElementById("req_curso").value;
    const req_media = document.getElementById("req_media").value;

    try {
        console.log("Oferta ID na função adicionarRequisitoAOferta:", ofertaId);
        const response = await fetch(`/api/programa/adicionar-requisitos/${ofertaId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                curso_id: req_curso,  // Alterado para enviar o ID do curso
                req_media,
                ofertaId: ofertaId,
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

