// ofertaRequest.js

async function enviarOferta() {
    const oferta_nome = document.getElementById("oferta_nome").value;
    const oferta_descricao = document.getElementById("oferta_descricao").value;

    try {
        const response = await fetch("/api/oferta/adicionar", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                oferta_nome,
                oferta_descricao,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message); // Exiba uma mensagem de sucesso
            document.getElementById("oferta_form").reset(); // Limpe o formulário
        } else {
            alert("Erro ao adicionar a oferta.");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}
