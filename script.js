async function realizarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    try {
        // Simulação de requisição para autenticação no backend (substitua por uma chamada real)
        const response = await autenticarNoBackend(username, password);

        if (response.autenticado) {
            // Login bem-sucedido
            fadeOutAndHide(document.getElementById("login-container"));
            setTimeout(function () {
                fadeInAndShow(document.getElementById("menu-container"));
            }, 500);
        } else {
            exibirMensagemErro("Login inválido. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao autenticar:", error);
        exibirMensagemErro("Ocorreu um erro ao autenticar. Tente novamente mais tarde.");
    }
}

function autenticarNoBackend(username, password) {
    // Simulação de chamada assíncrona ao backend (substitua por uma implementação real)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulação: se o usuário for "usuario" e a senha for "senha", autentica com sucesso
            if (username === "mateus" && password === "1234") {
                resolve({ autenticado: true });
            } else {
                resolve({ autenticado: false });
            }
        }, 1000);
    });
}

function exibirPerfil() {
    alert("Exibindo perfil...");
}

function exibirConfiguracoes() {
    alert("Exibindo configurações...");
}

function sair() {
    fadeInAndShow(document.getElementById("login-container"));
    fadeOutAndHide(document.getElementById("menu-container"));
}

function fadeInAndShow(element) {
    element.style.opacity = 0;
    element.style.display = "flex";

    var fadeInEffect = setInterval(function () {
        if (element.style.opacity < 1) {
            element.style.opacity = parseFloat(element.style.opacity) + 0.1;
        } else {
            clearInterval(fadeInEffect);
        }
    }, 50);
}

function fadeOutAndHide(element) {
    var fadeOutEffect = setInterval(function () {
        if (element.style.opacity > 0) {
            element.style.opacity = parseFloat(element.style.opacity) - 0.1;
        } else {
            clearInterval(fadeOutEffect);
            element.style.display = "none";
        }
    }, 50);
}

function exibirMensagemErro(mensagem) {
    var mensagemElement = document.getElementById("login-message");
    mensagemElement.textContent = mensagem;
    mensagemElement.classList.add("error");
    setTimeout(() => {
        mensagemElement.textContent = "";
        mensagemElement.classList.remove("error");
    }, 5000);
}
