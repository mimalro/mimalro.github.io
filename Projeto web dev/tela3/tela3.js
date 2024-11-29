let darkmode = localStorage.getItem('darkmode')
const tema = document.getElementById('tema')

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

tema.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})



function mostrarBotoes() {
    var input = document.getElementById('inputTexto');
    var botoes = document.getElementById('botoes')


    if (input.value.length >= 8) {
        botoes.style.display = 'block';
    } else {
        botoes.style.display = 'none'
    }
}

document.getElementById('botaoEnviar').addEventListener('click', validarFormulario);

function validarFormulario () {
    console.log("Testando");
    const username = document.getElementById('inputNome').value;
    const email = document.getElementById('inputEmail').value;
    const errorMessage = document.getElementById('errorMessage');
    const messageElement = document.getElementById('message');

    if (!username || !email) {
        errorMessage.style.display = 'block'
        
    } else {
        errorMessage.style.display = 'none';
        messageElement.style.display = 'block'
        alert('Formulário enviado com sucesso');
        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 3000);
    }
}


