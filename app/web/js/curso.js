async function adicionarCurso() {
    let msgDOM = document.getElementById("msg");
    msgDOM.textContent = "";
    const cursoNome = document.getElementById('curso_nome').value;

    try {
        // Recuperar o adminId da URL
        const urlParams = new URLSearchParams(window.location.search);
        const adminId = urlParams.get('adminId') || '';

        const response = await fetch('/api/curso/adicionar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ curso_nome: cursoNome, adminId: adminId }),
        });

        if (response.ok) {
            document.getElementById('curso_success').style.display = 'block';
            document.getElementById('curso_fail').style.display = 'none';

            try {
                const data = await response.json();
                const cursoId = data.cursoId;

                console.log("Data:", data);
                console.log("Curso ID:", cursoId);

                document.getElementById('cursoIdContainer').textContent = cursoId;
                window.location.href = `upload.html?cursoId=${cursoId}&adminId=${adminId}`;

            } catch (error) {
                console.error('Erro ao processar resposta JSON:', error);
            }
        } else {
            document.getElementById('curso_success').style.display = 'none';
            document.getElementById('curso_fail').style.display = 'block';
        }

    } catch (error) {
        console.error('Erro ao adicionar curso:', error);
        document.getElementById('curso_success').style.display = 'none';
        document.getElementById('curso_fail').style.display = 'block';
    }
}
