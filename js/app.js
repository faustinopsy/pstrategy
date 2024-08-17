import { AndroidStrategy } from './devices/AndroidStrategy.js';
import { AppleStrategy } from './devices/AppleStrategy.js';
import { DesktopStrategy } from './devices/DesktopStrategy.js';
import { detectarDevice } from './detectarDevice.js';
import PrecoContext  from './Context.js';

const precoOriginal = 100.00; 
const dispositivo = detectarDevice(); 

const marcaDispositivo ={
    Apple : new AppleStrategy(),
    Mobile : new AndroidStrategy(),
    Desktop : new DesktopStrategy()
}

let strategy;

strategy = marcaDispositivo[dispositivo];

const contextodopreco = new PrecoContext(strategy);
const finalPrice = contextodopreco.calcularPreco(precoOriginal);

document.getElementById('final-price').textContent = `R$${finalPrice.toFixed(2)}`;
