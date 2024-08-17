import LinguagemStrategy from './LinguagemStrategy.js'
export class EspanholStrategy extends LinguagemStrategy {
    aplicarLinguagem(jsonData) {
        document.getElementById('title').innerText = jsonData.title;
        document.getElementById('description').innerText = jsonData.description;
    }
}