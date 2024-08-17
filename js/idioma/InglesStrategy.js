import LinguagemStrategy from './LinguagemStrategy.js'
export class InglesStrategy extends LinguagemStrategy {
    aplicarLinguagem(jsonData) {
        document.getElementById('title').innerText = jsonData.title;
        document.getElementById('description').innerText = jsonData.description;
    }
}