import PrecoStrategy from './PrecoStrategy.js';
export class AndroidStrategy extends PrecoStrategy {
    calcular(price) {
        return price * 0.95; 
    }
}