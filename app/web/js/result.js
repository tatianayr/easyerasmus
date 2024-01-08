function obterAdminIdDoLocalStorage() {
    return localStorage.getItem('adminId') || '';
}
function exibirResultados(resultados) {
    console.log("Resultados recebidos:", resultados);

    const tableBody = document.getElementById('resultTableBody');
    tableBody.innerHTML = '';

    resultados.forEach(resultado => {
        const row = tableBody.insertRow();

        // Células existentes
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

        // Célula de botão de edição
        const cell10 = row.insertCell(9);
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('editButton'); 
        editButton.addEventListener('click', () => preencherFormularioEdicao(resultado));
        cell10.appendChild(editButton);
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
async function enviarAtualizacao() {
    const adminId = obterAdminIdDoLocalStorage();

    if (adminId) {
        const form = document.getElementById('edicaoForm');
        const formData = new FormData(form);

        // Remove campos vazios do formData
        for (const [key, value] of formData.entries()) {
            if (value === '') {
                formData.delete(key);
            }
        }

        try {
            const response = await fetch(`/api/programa/atualizar-resultado/${adminId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Atualização bem-sucedida:", data.message);
                // Chame a função para obter e exibir resultados novamente após a atualização
                obterEExibirResultados();
            } else {
                console.error("Erro na atualização:", data.error);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }
}


function preencherFormularioEdicao(resultado) {
    const form = document.getElementById('edicaoForm');
    editButton.classList.add('editButton'); 

    // Preencha os campos do formulário com os dados do resultado
    form.elements['prog_id'].value = resultado.prog_id;
    form.elements['prog_tipo'].value = resultado.prog_tipo;
    form.elements['prog_uni'].value = resultado.prog_uni;
    form.elements['prog_pais'].value = resultado.prog_pais;
    form.elements['prog_cid'].value = resultado.prog_cid;
    form.elements['of_id'].value = resultado.of_id;
    form.elements['of_curso'].value = resultado.of_curso;
    form.elements['of_vaga'].value = resultado.of_vaga;
    form.elements['req_id'].value = resultado.req_id;
    form.elements['req_media'].value = resultado.req_media;
}

document.addEventListener('DOMContentLoaded', obterEExibirResultados);
