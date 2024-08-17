import { PortuguesStrategy } from '../strategyIdioma/PortuguesStrategy.js';
import { InglesStrategy } from '../strategyIdioma/InglesStrategy.js';
import { EspanholStrategy} from '../strategyIdioma/EspanholStrategy.js';
import { detectarIdioma } from './detectarIdioma.js';

export function configurarIdioma(context) {
    let lang = localStorage.getItem('lang') || detectarIdioma();
    
    const idioma = {
        pt: new PortuguesStrategy(),
        en: new InglesStrategy(),
        es: new EspanholStrategy()
    }

    context.aplicarStrategy(idioma[lang]);
    return lang;
}

export function setLanguage(lang, context, carregarIdiomaFunc) {
    localStorage.setItem('lang', lang);
    const idioma = {
        pt: new PortuguesStrategy(),
        en: new InglesStrategy(),
        es: new EspanholStrategy()
    }
    context.aplicarStrategy(idioma[lang]);
    carregarIdiomaFunc(lang, context);
}
