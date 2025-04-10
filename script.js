document.getElementById("cadastro-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos preenchidos pelo usuário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senhaRecuperacao = document.getElementById("senhaRecuperacao").value;
    const premium = document.getElementById("premium").value;
    const imagemPerfil = document.getElementById("imagemPerfil").value;

    // Monta o objeto de usuário para envio
    const dadosUsuario = {
        nome,
        email,
        senha,
        premium,
        imagemPerfil,
        senhaRecuperacao
    };

    try {
        const resposta = await fetch("https://back-spider.vercel.app/user/cadastrarUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosUsuario)
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao cadastrar: ${resposta.status}`);
        }

        const dados = await resposta.json();
        alert("Usuário cadastrado com sucesso!");
        console.log("Resposta da API:", dados);

        // Redireciona ou limpa os campos após sucesso (opcional)
        document.getElementById("cadastro-form").reset();

    } catch (erro) {
        console.error("Erro no cadastro:", erro);
        alert("Falha ao cadastrar usuário. Verifique os dados e tente novamente.");
    }
});