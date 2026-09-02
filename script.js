// Interação simples: mostra uma mensagem quando o botão é clicado
const botao = document.getElementById('btnComprar');
const mensagem = document.getElementById('mensagemBonus');

botao.addEventListener('click', function() {
    if (mensagem.style.display === 'block') {
        mensagem.style.display = 'none';
    } else {
        mensagem.style.display = 'block';
    }
});