export function detectarIdioma() {
    const language = navigator.language || navigator.userLanguage;
    
    const mapaLinguagem = {
        'pt': 'pt',
        'en': 'en',
        'es': 'es'
    };
    
    return mapaLinguagem[language.slice(0, 2)] || 'pt';
}
