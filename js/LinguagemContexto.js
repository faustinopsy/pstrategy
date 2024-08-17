export default class LinguagemContexto {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    aplicarLinguagem(jsonData) {
        this.strategy.aplicarLinguagem(jsonData);
    }
}