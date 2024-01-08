// result.js

function obterAdminIdDoLocalStorage() {
    return localStorage.getItem('adminId') || '';
}

function exibirResultados(resultados) {
    console.log("Resultados recebidos:", resultados);

    const tableBody = document.getElementById('resultTableBody');
    tableBody.innerHTML = '';

    resultados.forEach(resultado => {
        const row = tableBody.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = resultado.admin_uni;

        const cell2 = row.insertCell(1);
        cell2.textContent = resultado.curso_nome;

        const cell3 = row.insertCell(2);
        cell3.textContent = resultado.prog_tipo;

        const cell4 = row.insertCell(3);
        cell4.textContent = resultado.prog_uni;

        const cell5 = row.insertCell(4);
        cell5.textContent = resultado.prog_pais;

        const cell6 = row.insertCell(5);
        cell6.textContent = resultado.prog_cid;

        const cell7 = row.insertCell(6);
        cell7.textContent = resultado.of_curso;

        const cell8 = row.insertCell(7);
        cell8.textContent = resultado.of_vaga;

        const cell9 = row.insertCell(8);
        cell9.textContent = resultado.req_media;

        // Adicione mais células conforme necessário para outras colunas
    });
}

async function obterEExibirResultados() {
    const adminId = obterAdminIdDoLocalStorage();

    if (adminId) {
        try {
            const response = await fetch(`/api/programa/resultado/${adminId}`);
            const data = await response.json();

            if (response.ok) {
                exibirResultados(data.resultado);
            } else {
                console.error("Erro ao obter resultados:", data.error);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }
}

// Chame a função para obter e exibir resultados quando a página for carregada
document.addEventListener('DOMContentLoaded', obterEExibirResultados);
