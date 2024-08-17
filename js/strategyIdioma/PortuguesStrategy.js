import LinguagemInterface from './LinguagemInterface.js'
export class PortuguesStrategy extends LinguagemInterface {
    aplicarLinguagem(jsonData) {
        document.getElementById('title').innerText = jsonData.title;
        document.getElementById('description').innerText = jsonData.description;
    }
}