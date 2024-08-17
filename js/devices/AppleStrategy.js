import PrecoStrategy from './PrecoStrategy.js';
export class AppleStrategy extends PrecoStrategy {
    calcular(price) {
        return price * 1.05; 
    }
}