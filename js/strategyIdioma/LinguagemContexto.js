export default class LinguagemContexto {
    constructor(strategy) {
        this.strategy = strategy;
    }

    aplicarStrategy(strategy) {
        this.strategy = strategy;
    }

    aplicarLinguagem(jsonData) {
        this.strategy.aplicarLinguagem(jsonData);
    }
}