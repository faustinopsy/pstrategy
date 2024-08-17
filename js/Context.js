export default class PrecoContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calcularPreco(price) {
        return this.strategy.calcular(price);
    }
}