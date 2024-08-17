import PrecoStrategy from './PrecoStrategy.js';
export class DesktopStrategy extends PrecoStrategy {
    calcular(price) {
        return price; 
    }
}