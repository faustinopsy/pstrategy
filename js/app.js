import LinguagemContexto from './strategyIdioma/LinguagemContexto.js';
import { conteudoInicial } from './conteudo.js';
import { carregaIdioma } from './administraIdioma/carregaIdioma.js';
import { configurarIdioma, setLanguage } from './administraIdioma/gerenciaLinguagem.js';

conteudoInicial();

const context = new LinguagemContexto(null);

const lang = configurarIdioma(context);
carregaIdioma(lang, context);

document.getElementById('pt-btn').addEventListener('click', () => setLanguage('pt', context, carregaIdioma));
document.getElementById('en-btn').addEventListener('click', () => setLanguage('en', context, carregaIdioma));
document.getElementById('es-btn').addEventListener('click', () => setLanguage('es', context, carregaIdioma));
