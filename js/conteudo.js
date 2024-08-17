export function conteudoInicial() {
        const main = document.getElementById('app');
        main.innerHTML = `
        <button id="pt-btn">Português</button>
        <button id="en-btn">Inglês</button>
        <button id="es-btn">Espanhol</button>
        <h1 id="title">Idioma Dinâmico</h1>
        <p id="description">Este é um exemplo de renderização com base na linguagem do navegador.</p>
            
        `
    }