import { PortuguesStrategy } from './idioma/PortuguesStrategy.js';
import { InglesStrategy } from './idioma/InglesStrategy.js';
import { EspanholStrategy} from './idioma/EspanholStrategy.js';
import { detectarIdioma } from './idioma/detectarIdioma.js';
import LinguagemContexto  from './LinguagemContexto.js';
import { conteudoInicial } from './conteudo.js';

conteudoInicial();

const context = new LinguagemContexto(null);

function carregarIdioma(lang) {
    fetch(`js/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            context.aplicarLinguagem(data);
        });
}

const lang = detectarIdioma();
let strategy;
const idioma = {
    pt: new PortuguesStrategy(),
    en: new InglesStrategy(),
    es: new EspanholStrategy()
}

strategy = idioma[lang];

context.setStrategy(strategy);
carregarIdioma(lang);


document.getElementById('pt-btn').addEventListener('click', () => {
    context.setStrategy(new PortuguesStrategy());
    carregarIdioma('pt');
});

document.getElementById('en-btn').addEventListener('click', () => {
    context.setStrategy(new InglesStrategy());
    carregarIdioma('en');
});

document.getElementById('es-btn').addEventListener('click', () => {
    context.setStrategy(new EspanholStrategy());
    carregarIdioma('es');
});
