// Lê os dados do formulário quando aperta o botão e impede padrão
document.getElementById("contato").addEventListener("submit", function(event) {
    event.preventDefault();

    // Declarando variaveis e recebendo valor do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Validação campos em branco no formulário
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Validação simples de email
    if (!email.includes("@") || !email.includes(".")) {
        alert("E-mail inválido!");
        return;
    }

    // Caso não haja problemas informar sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpar formulário
    document.getElementById("contato").reset();
});
